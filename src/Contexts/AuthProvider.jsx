import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebages/Firebages';

export const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loader, setLoader]=useState(true)

// singout 
const userSingOut=()=>{
    setLoader(true)
    return signOut(auth)
}

    // creatUserWithEmilAndPasswor
    const creatUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
// userSingIn with Googel
const privder =new GoogleAuthProvider()
const singInWithGoogle=()=>{
    setLoader(true)
    return signInWithPopup(auth, privder)
}


 // userSingIn
 const userSing =(email,password)=>{
    setLoader(true)
       return signInWithEmailAndPassword(auth, email,password)
 }   

//onAuthState

useEffect(()=>{
    const subscribe =onAuthStateChanged(auth, (current)=>{
        setLoader(false)
        setUser(current)
    })
    return()=>{
         subscribe()
    }
},[]) 

// send params or contex
 const userInfo={
    userSingOut,
    creatUser,
    singInWithGoogle,
    userSing,
    loader,
    user,
    setUser
 }   

    return <AuthContex value={userInfo}>
       { children }
    </AuthContex>
}
        