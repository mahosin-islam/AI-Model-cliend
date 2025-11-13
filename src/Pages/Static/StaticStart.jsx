import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const StaticStart = () => {
  return (
    <div className=" mt-5">
     <div className="flex justify-center text-center">
        <div>
            <button className="text-2xl font-bold ">Get Stard</button>
            <p>Start exploring AI models and boost your skills today</p>
        </div>
     </div>
            <div className="flex justify-center items-center">
                  <div className="flex gap-5 mt-3">
        <Link to="/login">
          <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-6 p-1 font-semibold rounded-[4px] text-white">LogIn</button>
        </Link>
         <Link to="/register">
          <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-6 p-1 font-semibold rounded-[4px] text-white">Register</button>
         </Link>
      </div>
            </div>
    </div>
  );
};

export default StaticStart;
