import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../../Contexts/AuthContex";
import ModelCard from "../../Componets/ModelCard";
import { FadeLoader } from "react-spinners";

const Mymodel = () => {
  const { user } = use(AuthContex);
  const [data, setData] = useState([]);
   const [loading,setLoading]=useState(true)
  console.log(data);
  useEffect(() => {
    fetch(`https://server-side-xi.vercel.app/Mymodel?email=${user.email}`, {
      headers: {
        authorization: `Beare ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [user]);

   if(loading){
    return <div className="flex justify-center mt-50">
    <FadeLoader color="#1fc96f" className="text-center" />
  </div>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center text-[#9f62f2] my-5">
        Crat My Model
      </h2>
      <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
        {data.map((card) => (
          <ModelCard key={card._id} card={card}></ModelCard>
        ))}
      </div>
    <div className="text-2xl text-gray-400 flex justify-center items-center py-10">
        {data.length=='0'?<span>Not Find AI mode </span>:""}
    </div>
    </div>
  );
};

export default Mymodel;
