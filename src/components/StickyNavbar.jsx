import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Search, Menu } from "lucide-react";
import { motion } from "framer-motion"
import {
  BriefcaseBusiness,
  Megaphone,
  BookMarked,
  MapPinHouse,
} from "lucide-react";

const StickyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
    <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.1 }}
  className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300"
>
  {/* Make the inside relative so absolute child works */}
  <div className="relative max-w-7xl mx-auto">
    {/* Top bar */}
    <div className="flex items-center justify-between py-2 px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Search */}
      <div className="flex-1 px-4 hidden md:flex">
        <div className="flex w-full max-w-md mx-auto border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Looking For"
            className="px-4 py-2 w-full focus:outline-none"
          />
          <button className="bg-red-500 px-4 text-white">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Sign In + Menu */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-500">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="User"
            className="h-5 w-5"
          />
          <span>Sign in</span>
        </button>

        <button
          className=" cursor-pointer bg-red-500 text-white px-4 py-2 flex items-center space-x-2 rounded-md hover:bg-red-600"
          onClick={handleMenu}
        >
          <Menu size={20} />
          <span>Menu</span>
        </button>
      </div>
    </div>

    {/* Dropdown — now works because parent is relative */}
    {showMenu && (
      <div className="absolute flex flex-1 justify-center space-x-8 top-full left-0 w-full bg-white shadow-md px-6 py-4 space-y-4">
        <div className="flex flex-col items-center hover:text-red-400 cursor-pointer">
          <BriefcaseBusiness />
          <span>Business directory</span>
        </div>
        <div className="flex flex-col items-center hover:text-red-400 cursor-pointer">
          <Megaphone />
          <span>Market Place</span>
        </div>
        <div className="flex flex-col items-center hover:text-red-400 cursor-pointer">
          <BookMarked />
          <span>Education</span>
        </div>
        <div className="flex flex-col items-center hover:text-red-400 cursor-pointer">
          <MapPinHouse />
          <span>Real Estate</span>
        </div>
      </div>
    )}
  </div>
</motion.div>

    </>
  );
};

export default StickyNavbar;
