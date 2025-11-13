import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
    const navigate = useNavigate();
    const handel=()=>{
      navigate('/')  
  }
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-center p-5">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong 😢
          </h2>
          <p className="text-gray-500 mt-2">
            Please try again later or check your internet connection.
          </p>
          <button
            onClick={handel}
            className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 p-1 font-semibold rounded-[4px] text-white"
          >
            Go to home page
          </button>
        </div>
        <img
          className=""
          src="https://i.ibb.co.com/Nd5SH4Kt/error-404.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Error;
