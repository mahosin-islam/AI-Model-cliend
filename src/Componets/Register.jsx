import React, { use, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, setUser, singInWithGoogle } = use(AuthContex);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      toast(
        "Must contain at least one uppercase and one lowercase letter Must be at least 6  characters long"
      );
      return;
    }
    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(res.user, profile);
        toast("successul you Register");
        setUser(res.user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
        toast("Already exist you email");
      });
  };
  // sing with googel
  //singIn with Googel
  const handelSingWithGoogel = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
        <div className="hero-content flex-col w-200">
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Register for AI Model Inventory Manager</h1>
            <p className="pt-3">
              Already have accoutn?{" "}
              <Link to="/Login">
                <span className="text-blue-500">Now LogIn</span>
              </Link>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />
                  <label className="label">PhotURL</label>
                  <input
                    type="photo"
                    name="photo"
                    className="input"
                    placeholder="photourl"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <span className="relative">
                    <input
                      type={`${open ? "text" : "password"}`}
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setOpen(!open)}
                      className="absolute text-[20px] top-3 right-7 cursor-pointer"
                    >
                      {open ? (
                        <IoEyeOutline></IoEyeOutline>
                      ) : (
                        <IoEyeOffOutline></IoEyeOffOutline>
                      )}
                    </span>
                  </span>
                  <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 p-1 font-semibold rounded-[4px] text-white">Register</button>
                  <button
                    onClick={handelSingWithGoogel}
                    className="btn bg-white text-black border-[#e5e5e5]"
                  >
                    <FcGoogle className="text-2xl"></FcGoogle>
                    Login with Google
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
