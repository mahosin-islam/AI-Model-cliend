import React, { use } from 'react';
import { AuthContex } from '../Contexts/AuthContex';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user,setLoader}=use(AuthContex)

   if(user){
    return children
   }
   if(setLoader){
    return <p>loading....</p>
   }

    return <Navigate to="/LogIn" state={location?.pathname}></Navigate>
};

export default Private;