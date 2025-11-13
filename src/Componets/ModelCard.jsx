import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";

const ModelCard = ({ card }) => {
 const {thems}=use(AuthContex)
  return (
    <div className={`text-${thems=='dark'?'black':''}`}>
      <div className=" hover:scale-105 border-gray-300 duration-200 border-2 rounded-2xl  transition-transform">
        <div className=" flex flex-col  rounded-2xl bg-white  shadow-2xl">
          <figure className=" ">
            <img className="border-b-[2px] border-gray-300 rounded-t-2xl object-cover  h-50 w-full" src={card.image} alt="Shoes" />
          </figure>
             <div className="flex rounded-b-2xl flex-1 bg-white card-body h-min-40">
       
              <h2 className="card-title">Nane:{card.name}</h2>
           <div className=" justify-between ">
             <p>Framework:{card.framework}</p>
          
            <h2>useCase:{card.useCase}</h2>
      
           </div>
              <Link to={`/Dtails/${card._id}`}>
              <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 w-full p-1 font-semibold rounded-[4px] text-white">Dtaisl</button>
              </Link>
          
             </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
