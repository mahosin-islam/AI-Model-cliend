import React, { use, useEffect, useState } from 'react';
import { AuthContex } from '../../Contexts/AuthContex';
import MixCard from '../../Componets/MixCard';
import { FadeLoader } from 'react-spinners';

const ModelPurchase = () => {
    const{user}=use(AuthContex)
    const [purchase, setPurchase]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://server-side-xi.vercel.app/myPurchase?email=${user.email}`,{
              headers: {
        authorization: `Beare ${user?.accessToken}`,
      },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('mypurchase successful',data)
            setPurchase(data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[user])


     if(loading){
    return <div className="flex justify-center mt-50">
    <FadeLoader color="#1fc96f" className="text-center" />
  </div>
  }

    return (
        <div>
             <h2 className="text-2xl font-semibold text-center text-[#9f62f2] my-5">Model Purchase</h2>
                 <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
        {purchase.map((card) => (
          <MixCard key={card._id} card={card}></MixCard>
        ))}
      </div> 
      <div className="text-2xl text-gray-400 flex justify-center items-center py-10">
        {purchase.length=='0'?<span>Not Find Your purchase AI mode </span>:""}
    </div>
        </div>
    );
};

export default ModelPurchase;