import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../Contexts/AuthContex";
import { toast } from "react-toastify";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const { user, setUser, userSingOut } = use(AuthContex);
  console.log(user);
  const hadelSingOut = () => {
    userSingOut()
      .then(() => {
        toast("success singOut");
        setUser(null);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="">
      <div className="  p-3 items-center border-2 w-full flex justify-between mb-2">
        <div>
          <h2 className="text-3xl text-[#9f62f2] font-bold">AI-Models</h2>
        </div>
        <nav className="flex gap-4">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Allmodel">All-Model</NavLink>
          <NavLink to="/Addmodel">Add-Model</NavLink>
        </nav>
        <div className="flex gap-5 items-center">
          <div className="navbar-end gap-3">
            {user ? (
              <div className="dropdown dropdown-end z-50">
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
                        <img className="h-10 rounded-full block mx-auto"
                      alt="Tailwind CSS Navbar component"
                      referrerPolicy="no-referrer"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                    <li className="text-sm text-center font-bold">{user.displayName}</li>
                    <li className="text-center">{user.email}</li>
                    </div>
                  </div>
                   <li>
                    <Link to="/AllModel">
                        Models
                    </Link>
                   </li>
                    <li>
                    <Link to="/ModelPurchase">
                        ModelPurchase
                    </Link>
                   </li>
                  <li>
                    <button className="ml-3 text-pink-500 text-[20px]" onClick={hadelSingOut}>Logout   <TbLogout className="mt-1"></TbLogout> </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/Login">
                
                 <button className="font-bold text-[18px] text-white bg-black px-8 rounded-full py-2 ">LogIn</button>
                
              </Link>
            )}
          </div>
          <Link to="/register">
            <button className="btn btn-wide rounded-2xl">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/> */
}
