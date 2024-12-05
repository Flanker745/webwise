import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="bg-primary">
        <div className="bg-white py-3">
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
        <div className="w-3/4 m-auto  flex text-lg  font-semibold h-[80px]">
          <div className="w-2/12 text-center  lg:hidden block">
            <img src={logo} alt="Logo" />
          </div>
          <div className="w-10/12 lg:w-full">
            <nav className="flex items-center justify-between children:h-full children:flex children:items-center h-full">
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
              <div className="flex  gap-5 justify-around">
                <FaInstagram />
                <FaXTwitter />
                <FaWhatsapp />
                <FaInstagram />
                <FaInstagram />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
