import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { toast } from "react-toastify";
import { TbLogout } from "react-icons/tb";
import { Twirl } from "hamburger-react";

const Navbar = () => {
  const { user, setUser,setThems, userSingOut } = use(AuthContex);
  const [humbur, setHumbur] = useState(false);
 console.log(user)
  const hadelSingOut = () => {
    userSingOut()
      .then(() => {
        toast("success singOut");
        setUser(null);
      })
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Allmodel">All-Model</NavLink>
      <NavLink to="/Addmodel">Add-Model</NavLink>
    </>
  );
 
const [theme, setThem]=useState(localStorage.getItem("theme")|| 'light')
  
    useEffect(()=>{
         const html=document.querySelector("html")
          html.setAttribute("data-theme",theme)
          localStorage.setItem("theme",theme)
    },[theme])
    const handleTheme=(check)=>{ 
   setThem(check?"dark":"light")
   setThems(check?"dark":"light")
}

console.log(theme)
  return (
    <div className="">
      <div
        className="text-white bg-pink-500 font-bold fixed top-0 left-0 z-10 shadow-2xl
      
      p-3 items-center  w-full flex justify-between h-16"
      >
        <div>
          <h2 className="sm:text-3xl md:text-2xl text-1xl   text-white font-bold">AI-Models</h2>
        </div>
        <nav className=" gap-4 hidden  md:flex sm:hidden">
          {links}
        </nav>
        <div className="flex  gap-5 items-center">
          <div className="navbar-end gap-3 ">
            {user ? (
              <div className={ ` text-${theme=='light'?"black":'white'} dropdown dropdown-center z-50`}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 border-2 border-gray-300 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      referrerPolicy="no-referrer"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <div className=" pb-3 border-b border-b-gray-200">
                    <div className="mt-2">
                      <img
                        className="h-10 rounded-full block mx-auto"
                        alt="Tailwind CSS Navbar component"
                        referrerPolicy="no-referrer"
                        src={
                          user.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                      />
                      <li className="text-sm text-center font-bold">
                        {user.displayName}
                      </li>
                      <li className="text-center">{user.email}</li>
                    </div>
                  </div>
                  <li>
                              <div className="navbar">
            <input
              onChange={(e) =>handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
          </div>
                  </li>
                  <li>
                    <Link to="/Mymodel">Mymodel</Link>
                  </li>
                  <li>
                    <Link to="/ModelPurchase">ModelPurchase</Link>
                  </li>
                  <li>
                    <button
                      className="ml-3 text-pink-500 text-[20px]"
                      onClick={hadelSingOut}
                    >
                      Logout <TbLogout className="mt-1"></TbLogout>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/Login">
                <button className="font-bold text-[18px] text-white  px-8 rounded-full py-2 ">
                  LogIn
                </button>
              </Link>
            )}
          </div>
          <Link to="/register">
            <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 p-1 font-semibold rounded-[4px] text-white">
              Register
            </button>
          </Link>
          <button onClick={() => setHumbur(!humbur)} className=" md:hidden ">
            <Twirl></Twirl>
          </button>
        </div>
      </div>
      <div
        className={`mt-18  pl-5 ${
          humbur ? "flex" : "hidden"
        }  text-2xl font-semibold gap-4 flex-col md:hidden`}
      >
        {links}
      </div>
    </div>
  );
};

export default Navbar;

