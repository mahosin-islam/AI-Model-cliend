import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
         <FadeLoader></FadeLoader>
        </div>
      </div>
    </div>
  );
};

export default loading;
