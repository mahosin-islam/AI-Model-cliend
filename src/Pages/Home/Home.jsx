import React, {  useEffect, useState } from "react";
import ModelCard from "../../Componets/ModelCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContex } from "../../Contexts/AuthContex";

import { FadeLoader } from "react-spinners";
import StaticAbout from "../Static/StaticAbout";
import StaticStart from "../Static/StaticStart";

const Home = () => {
  const [model, setModel] = useState([]);
  const [loader, setLoader] = useState(true);

useEffect(() => {
    fetch(`https://server-side-xi.vercel.app/Lates-model`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Filter success", data);
        setModel(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []); 

  if (loader) {
    return (
      <div className="flex justify-center mt-50">
        <FadeLoader color="#1fc96f" className="text-center" />
      </div>
    );
  }

  return (
    <div className="bg-base-200 py-2 pb-4 ">
      <h2 className=" text-2xl font-semibold text-center text-[#9f62f2] ">
        AI Model
      </h2>

      <div className="flex mb-3 px-3 justify-end">
        <Link to="/AllModel">
          <button className="text-pink-400  btn ">
            <span>All Model</span>
            <FaArrowRightLong></FaArrowRightLong>
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
        {model?.map((card) => (
          <ModelCard key={card._id} card={card}></ModelCard>
        ))}
      </div>
      <div className="my-10">
        <StaticAbout></StaticAbout>
        <StaticStart></StaticStart>
      </div>
    </div>
  );
};

export default Home;
