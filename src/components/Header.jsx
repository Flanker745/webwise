import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Banner from "./Banner";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [navbar, setNebar] = useState(false);
  return (
    <>
      {" "}
      <div className="bg-white lg:block hidden py-3">
        <div className="w-3/4 m-auto flex items-center justify-between">
          <div className="">
            <img width={200} src={logo} alt="Logo" />
          </div>
          <div className="flex gap-10">
            <div className="flex gap-4 ">
              <div className="flex text-3xl text-primary items-center">
                <MdPhoneInTalk />
              </div>
              <Link>
                <div className="font-bold">E-mail</div>
                <div className="text-gray-700">
                  webwisewebservices@gmail.com
                </div>
              </Link>
            </div>
            <div className="flex gap-4 ">
              <div className="flex text-3xl text-primary items-center">
                <MdOutlineEmail />
              </div>
              <Link>
                <div className="font-bold">Phone</div>
                <div className="text-gray-700">+91 7014944745</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[600px] relative bg-[url('/src/assets/img12.jpg')] bg-cover bg-center">
        <div className="bg-primary  opacity-45 h-full w-full"> </div>
        <header>
          <div className="lg:w-3/4 w-full m-auto top-0 absolute left-1/2 translate-x-[-50%] flex text-lg  font-semibold h-[80px]">
            <div className="w-2/12 text-center  lg:hidden block">
              <img src={logo} alt="Logo" />
            </div>
            <div className="w-full lg:block flex justify-end">
              <div
                onClick={() => {
                  setNebar(!navbar);
                }}
                className="h-fit lg:hidden duration block z-[9999] text-4xl p-2 w-fit justify-end"
              >
                {navbar ? <IoCloseSharp /> : <TiThMenu />}
              </div>
              <nav
                className={`absolute bg-white lg:bg-transparent lg:relative w-full h-screen lg:h-full top-0 flex-col lg:flex-row flex items-center lg:justify-between duration-300 ${
                  navbar ? "translate-y-0" : "-translate-y-full"
                } lg:translate-y-0`}
              >
                <Link className="hover:text-gray-700">Home</Link>
                <Link className="hover:text-gray-700">About</Link>
                <Link className="relative group hover:text-gray-700">
                  <div className="flex items-center">
                    Services
                    <span className="ml-1 transform duration-300 group-hover:rotate-180">
                      +
                    </span>
                  </div>
                  <div className="absolute left-0 top-full overflow-hidden max-h-0 group-hover:max-h-64 duration-300 bg-white text-black shadow-lg mt-2 w-40 rounded">
                    <ul className="p-2">
                      <li className="hover:bg-gray-200 px-2 py-1 rounded">
                        Service 1
                      </li>
                      <li className="hover:bg-gray-200 px-2 py-1 rounded">
                        Service 2
                      </li>
                      <li className="hover:bg-gray-200 px-2 py-1 rounded">
                        Service 3
                      </li>
                      <li className="hover:bg-gray-200 px-2 py-1 rounded">
                        Service 4
                      </li>
                      <li className="hover:bg-gray-200 px-2 py-1 rounded">
                        Service 5
                      </li>
                    </ul>
                  </div>
                </Link>
                <Link className="hover:text-gray-700">Blogs</Link>
                <Link className="hover:text-gray-700">Contact</Link>
                <div className="flex gap-5 justify-around ">
                  <FaInstagram />
                  <FaXTwitter />
                  <FaWhatsapp />
                  <FaInstagram />
                  <FaInstagram />
                </div>
              </nav>
            </div>
          </div>
          <Banner />
        </header>
      </div>
    </>
  );
}

export default Header;
