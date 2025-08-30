import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Search, Menu } from "lucide-react";

const StickyNavbar = ({ setMenuOpen }) => {

    const[openMenu, setOpenMenu] = useState()

    const showMenu = ()=>{
        return(
            <p className="text-4xl text-"> helloooooooooo</p>
        )
    }
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-2 px-4 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Search Bar */}
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

          {/* Menu Button (Triggers Navbar Mobile Menu) */}
          <button
            className="bg-red-500 text-white px-4 py-2 flex items-center space-x-2 rounded-md hover:bg-red-600"
            onClick={() => console.log('clickeddddd')}
            
          >
            <Menu size={20} />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
