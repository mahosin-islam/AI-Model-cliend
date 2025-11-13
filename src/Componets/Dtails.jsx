import React, { use, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { FadeLoader } from "react-spinners";

const Dtails = () => {
  const { user } = use(AuthContex);
  const [model, setModel] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const {
    name,
    createdBy,
    purchased,
    _id,
    framework,
    useCase,
    dataset,
    description,
    image,
  } = model;

  const navigare = useNavigate();
  useEffect(() => {
    fetch(`https://server-side-xi.vercel.app/model/${id}`, {
      headers: {
        authorization: `Beare ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("helo", data);
        setModel(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [user, id]);

  const handelDelet = (id) => {
    fetch(`https://server-side-xi.vercel.app/model/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("successfull you delete", data);
        navigare("/");
      })
      .catch((err) => console.log(err));
  };
  // handelPurchase
  const handelPurchase = () => {
    const newData = {
      name,
      framework,
      useCase,
      dataset,
      createdBy,
      image,
      purchased,
      purchased_by: user.email,
      description,
      createdAt: new Date(),
    };

    fetch("https://server-side-xi.vercel.app/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data post purchase", data);
      })
      .catch((err) => console.log(err));

    const purchaseded = purchased + 1;
    const newPurse = {
      purchased: purchaseded,
    };

    fetch(`https://server-side-xi.vercel.app/model/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPurse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("add success PATCH", data);
      })
      .catch((err) => console.log(err));
  };

  if (loader) {
    return (
      <div className="flex justify-center mt-50">
        <FadeLoader color="#1fc96f" className="text-center" />
      </div>
    );
  }

  return (
    <div className="bg-base-200 py-10 text-red-500">
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
              onClick={() => navigare(-1)}
              className="
                   text-green-500
                cursor-pointer flex gap-2 items-center"
            >
              <FaArrowLeftLong></FaArrowLeftLong>Back to product{" "}
            </span>

            <div className="flex flex-col  ">
              <div className="mt-2 font-semibold">
                <h2>Name:{name}</h2>
                <h2>Framewark:{framework}</h2>

                <h2 className="py-1">Usecase:{useCase}</h2>
                <h2>dataset:{dataset}</h2>
                <h2>purchase{purchased}</h2>
              </div>
              <div className="flex-col md:flex sm:flex-row gap-3 mt-7">
                <Link to="/ModelPurchase">
                  <button
                    onClick={handelPurchase}
                    className="90bg-gradient-to-r bg-black from-pink-500  to-pink-700 px-4 p-1 font-semibold rounded-[4px] text-white"
                  >
                    Purches
                  </button>
                </Link>

               {
                user.email==createdBy? <div className="flex gap-4">
                  <Link to={`/Update/${_id}`}>
                    <button className="text-pink-400 btn">Edit model</button>
                  </Link>
                  <button
                    onClick={() => handelDelet(_id)}
                    className="text-pink-400  btn"
                  >
                    Delete
                  </button>
                </div>:""
               }

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
  );
};

export default Dtails;
