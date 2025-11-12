import React, { use, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { FadeLoader } from "react-spinners";

const PurseDtails = () => {
  const navigate = useNavigate();
  const purse = useLoaderData();
  const {user}=use(AuthContex)
   const [model, setModel]=useState([])
    const [loader, setLoader]=useState(true)
  const{id}=useParams()
  console.log(id)
  console.log(purse)
  const { name, _id, framework, useCase, dataset, description, image } = model;
  const handelDelet = (id) => {
    fetch(`https://server-side-xi.vercel.app/purchase/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("successfull you delete", data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
// fatch data from servrside
useEffect(()=>{
  
 fetch(`https://server-side-xi.vercel.app/purchase/${id}`,{
  headers : {
        authorization: `Beare ${user?.accessToken}`,
      },
 })
 .then(res=>res.json())
 .then(data=>{
 console.log('helo', data)
 setModel(data)
 setLoader(false)
 })
 .catch(err=>console.log(err))
},[user,id])


if(loader){
    return <div className="flex justify-center mt-50">
    <FadeLoader color="#1fc96f" className="text-center" />
  </div>
  }

  return (
    <div>
      <div className="bg-base-200 py-8">
        <h2 className="text-center font-semibold text-2xl text-[#9f62f2] mb-5">
          My Model Purchase Dtails
        </h2>
        <div className="p-3 w-8/12 mx-auto rounded-2xl py-4  bg-white shadow-2xl">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="overflow-hidden img col-span-1">
              <img
                className="object-cover transition-transform duration-500 transform hover:scale-105 origin-center   h-50 w-full"
                src={image}
                alt=""
              />
            </div>
            <div className="text pl-2  col-span-1">
              <span
                onClick={() => navigate(-1)}
                className="
                              text-green-500
                           cursor-pointer flex gap-2 items-center"
              >
                <FaArrowLeftLong></FaArrowLeftLong>Back to product{" "}
              </span>

              <div className="flex flex-col  ">
                <div className="mt-2 font-semibold">
                  <span className="flex-col md:flex sm:flex-row gap-3 mt-3">
                    <span>Name:{name}</span>
                    <span>Framewark:{framework}</span>
                  </span>
                  <h2 className="py-2">Usecase:{useCase}</h2>
                  <h2>dataset:{dataset}</h2>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => handelDelet(_id)}
                    className="btn px-5 btn-sm mt-5 text-pink-400 font-bold"
                  >
                    Delet
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* discirption */}
          <div>
            <p className="hover:text-blue-300 text-gray-400">
              <span className="font-semibold text-black">Descriptin</span>{" "}
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurseDtails;
