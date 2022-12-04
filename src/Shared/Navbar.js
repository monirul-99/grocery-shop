import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center bg-white shadow-lg h-24 px-4 lg:px-16 text-black">
        <aside>
          <Link className="lg:text-3xl text-2xl  uppercase" to="/">
            Shop-x
          </Link>
        </aside>
        <aside className="flex gap-10 items-center -space-x-4">
          <Link className="font-semibold hidden lg:block">
            <div className="flex items-center relative">
              <div className="absolute right-5">
                <IconContext.Provider value={{ size: 20 }}>
                  <HiMagnifyingGlass />
                </IconContext.Provider>
              </div>
              <input
                type="text"
                placeholder="Search Here..."
                className="bg-gray-200 py-2 rounded-md border border-white font-light w-72 px-3 outline-none"
              />
            </div>
          </Link>

          <Link className="font-semibold hidden lg:block" to="/home">
            HOME
          </Link>

          <Link className="font-semibold hidden lg:block" to="/shop">
            SHOP
          </Link>
          <Link to="/search" className="lg:hidden md:hidden">
            <IconContext.Provider value={{ size: 24 }}>
              <HiMagnifyingGlass />
            </IconContext.Provider>
          </Link>
          <Link to="/cart">
            <IconContext.Provider value={{ size: 24 }}>
              <FaOpencart />
            </IconContext.Provider>
          </Link>

          <Link to="/avatar" className="lg:-ml-4">
            <div className="avatar">
              <div className="lg:w-12 w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
