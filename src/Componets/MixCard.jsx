import React from "react";
import { Link } from "react-router";

const MixCard = ({ card }) => {
  const { name, framework, useCase, createdBy, image } = card;
  return (
    <div>
      <div className="hover:scale-105 duration-200 transition-transform">
        <div className="rounded-2xl flex flex-col  bg-white  shadow-2xl">
          <figure className=" flex-2 p-2 ">
            <img
              className="object-cover  h-50 w-full"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="flex-1 bg-base-200 card-body h-min-40">
            <h2 className="card-title">Nane:{name}</h2>
            <h2>useCase:{useCase}</h2>
            <p>Framework:{framework}</p>
            <h2>createdBy:{createdBy}</h2>
          
            <Link to={`/PurseDtails/${card._id}`}>
              <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 w-full p-1 font-semibold rounded-[4px] text-white">
                Dtaisl
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixCard;
