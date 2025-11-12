import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";

const ModelCard = ({ card }) => {
 const {thems}=use(AuthContex)
  return (
    <div className={`text-${thems=='dark'?'black':''}`}>
      <div className=" hover:scale-105 duration-200 transition-transform">
        <div className="rounded-2xl flex flex-col  bg-white  shadow-2xl">
          <figure className=" flex-2 p-2 ">
            <img className="object-cover  h-50 w-full" src={card.image} alt="Shoes" />
          </figure>
             <div className="flex-1 bg-white card-body h-min-40">
       
              <h2 className="card-title">Nane:{card.name}</h2>
           <div className="flex justify-between ">
             <p>Framework:{card.framework}</p>
        
            <h3>purchase{card.purchased}</h3>
            
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
