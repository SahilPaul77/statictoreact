import React from "react";
import logo from "../assets/logo.png";
import {
  BriefcaseBusiness,
  Megaphone,
  BookMarked,
  MapPinHouse,
  UserRound,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="py-3 px-4 bg-white shadow-md z-40 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            height={100}
            width={120}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8 capitalize items-center flex-1">
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

        {/* Desktop Sign In */}
        <div className="hidden md:flex flex-row items-center px-4 cursor-pointer">
          <UserRound />
          <span className="ml-2">Sign in</span>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
