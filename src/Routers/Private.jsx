import React, { use } from 'react';
import { AuthContex } from '../Contexts/AuthContex';
import { Navigate } from 'react-router';
import { FadeLoader } from 'react-spinners';

const Private = ({children}) => {
    const {user,loader}=use(AuthContex)

   if(user){
    return children
   }
   if(loader){
    return <div className="flex justify-center mt-50">
        <FadeLoader color="#1fc96f" className="text-center" />
      </div>
   }

    return <Navigate to="/LogIn" state={location?.pathname}></Navigate>
};

export default Private;