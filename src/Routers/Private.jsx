import React, { use } from 'react';
import { AuthContex } from '../Contexts/AuthContex';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user,loader}=use(AuthContex)

   if(user){
    return children
   }
   if(loader){
    return <p>loading mone....</p>
   }

    return <Navigate to="/LogIn" state={location?.pathname}></Navigate>
};

export default Private;