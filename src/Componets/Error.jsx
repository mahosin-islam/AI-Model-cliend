import React from 'react';

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                 <div className="text-center p-10">
    <h2 className="text-2xl font-bold text-red-600">Something went wrong 😢</h2>
    <p className="text-gray-500 mt-2">Please try again later or check your internet connection.</p>
  </div>
                   <img className='' src="https://i.ibb.co.com/Nd5SH4Kt/error-404.png" alt="" />
                   
            </div>
        </div>
    );
};

export default Error;