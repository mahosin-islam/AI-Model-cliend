import React from "react";

const StaticAbout = () => {
  return (
    <div>
      <h2 className=" text-[#9f62f2] font-semibold text-2xl text-center">
        Explaining why are you need AI models
      </h2>
      <div className="sm:w-8/12 sm:mx-auto sm:text-center text-left">
        <p className="text-gray-400 text-center"> AI models are systems that learn from data to make predictions or decisions
        without being explicitly programmed. They power technologies like chatbots,
        voice assistants, image recognition, and more—making modern applications smarter
        and more interactive.</p>
      </div>
      <div className="mt-3 md:grid-cols-3  grid-cols-1  gap-2 grid justify-between">

        <div className=" transition duration-500 hover:bg-amber-200 col-span-1 flex justify-between items-center p-2 bg-pink-300 shadow-2xl ">
          <span className="img">
            <img
              className="w-30 border-gray-200 border-2 h-30 rounded-full"
              src="https://i.ibb.co.com/23zKrpZQ/download-4.jpg"
              alt=""
            />
          </span>

          <span className="text pl-4">
            <h2 className="font-semibold">Name: Education AI</h2>
            <p>useCase: Study help, question answering, learning assistance</p>
          </span>
        </div>
        <div className="col-span-1 flex justify-between items-center p-2 bg-pink-300 shadow-2xl  transition duration-500 hover:bg-amber-300">
          <span>
            <img className="img border-gray-200 border-2 rounded-full h-25 object-center w-30"  
            src="https://i.ibb.co.com/Wv71dWLk/images-6.jpg" alt="" />
          </span>
          <span className="text ml-4">
            <h2 className="font-semibold">Name: Healthcare AI</h2>
            <p>
              UseCase: Disease diagnosis, patient data analysis, medical
              recommendation
            </p>
          </span>
        </div>
        <div className="col-span-1 flex justify-between items-center p-2 bg-pink-300 shadow-2xl  transition duration-500 hover:bg-amber-300">
          <span  className="p-2">
            <img  className="img rounded-full border-gray-200 h-30 w-30 border-2"
             src="https://i.ibb.co.com/Tqnt3BCT/download-5.jpg" alt="" />
          </span>
          <span className="text ml-4 ">
            <h2 className="font-semibold">Name:Business & Finance AI</h2>
            <p>
              UseCase:Market prediction, data analytics, customer service
              automation
            </p>
          </span>
        </div>

      </div>
    </div>
  );
};

export default StaticAbout;
