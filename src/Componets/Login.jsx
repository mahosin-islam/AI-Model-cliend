import React, { use, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [open, setOpen] = useState(false);
  const { userSing, setUser, singInWithGoogle } = use(AuthContex);
     const location =useLocation()
     const navigate=useNavigate()
    
  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSing(email, password)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        toast("success LogIn");
        navigate(location.state||'/')
      })
      .catch((err) => {
        console.log(err.message);
        toast("Invalid email or password");
      });
  };
  //singIn with Googel
  const handelSingWithGoogel = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
         navigate(location.state||'/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
        <div className="hero-content flex-col w-200">
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Login to AI Model Inventory Manager</h1>
            <p className="pt-3">
              Don't have accoutn?{" "}
              <Link to="/Register">
                <span className="text-blue-500">Now Register</span>
              </Link>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelLogIn}>
                <fieldset className="fieldset">
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
                      className="text-[20px] absolute top-3 right-7 cursor-pointer"
                    >
                      {open ? (
                        <IoEyeOutline></IoEyeOutline>
                      ) : (
                        <IoEyeOffOutline></IoEyeOffOutline>
                      )}
                    </span>
                  </span>

                  <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 p-1 font-semibold rounded-[4px] text-white">LogIn</button>

                  {/* * Google * */}
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

export default Login;
