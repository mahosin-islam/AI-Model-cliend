import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaApple, FaGooglePlay, FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { IoCallOutline, IoLogoGithub } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer sm:footer-horizontal bg-[#ceb44b] text-neutral-content p-10">
        <nav>
          <div className="footer-title text-2xl flex items-center gap-4 font-bold">
            <span className="text-pink-500">
              AI<span className="text-white">-Model</span>
            </span>
            <a href="https://github.com/mahosin-islam/AI-Model-server">

           
              <span>
                <IoLogoGithub></IoLogoGithub>
              </span>
          
             </a>
          </div>
          <h2>Wevsite page</h2>
          <div>
            <div className="flex flex-col gap-1">
              <Link to="/Home">Home</Link>
              <Link to="/allmodel">All AI-model</Link>
              <Link to="/Mymodel">My-Model</Link>
              <Link to="/ModelPurchase">Purchase model</Link>
            </div>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title text-2xl">Contact</h6>
          <span className="flex font-semibold items-center gap-5">
            {" "}
            <IoCallOutline className="text-2xl"></IoCallOutline>
            <span>
              <p>+17900682</p>
              <p>Support Number</p>
            </span>
          </span>

          <span className="flex font-semibold items-center gap-5">
            {" "}
            <TfiEmail className="text-2xl"></TfiEmail>
            <span>
              <p>mahosin@gamil.com</p>
              <p>Gmail address</p>
            </span>
          </span>
          <div className="flex gap-4 items-center">
            <h2 className=" text-white">Socail Link</h2>
            <div>
              <span className="mt-2 text-2xl flex gap-5">
                <BsFacebook className="bg-blue-400 rounded-full p-1"></BsFacebook>
                <FaTwitter className="bg-blue-400 rounded-full p-1"></FaTwitter>
                <FiInstagram className="bg-red-400 text-white rounded-full p-1"></FiInstagram>
              </span>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Download App</h6>

          <div className="flex-col flex  gap-5">
            <button className="btn bg-black text-white ">
              <FaApple></FaApple>
              Apple stor
            </button>
            <button className="btn bg-black text-white ">
              <FaGooglePlay></FaGooglePlay>
              Googel App
            </button>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
