import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import StickyNavbar from "./StickyNavbar";
import {
  BriefcaseBusiness,
  Megaphone,
  BookMarked,
  MapPinHouse,
  UserRound,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showSticky && <StickyNavbar setMenuOpen={setMenuOpen} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ✅ GLOBAL MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-gray-50 p-4 space-y-4 shadow-md md:hidden">
          <div className="flex flex-col space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 hover:text-red-400 cursor-pointer">
              <BriefcaseBusiness /> <span>Business directory</span>
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-red-400 cursor-pointer">
              <Megaphone /> <span>Market Place</span>
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-red-400 cursor-pointer">
              <BookMarked /> <span>Education</span>
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-red-400 cursor-pointer">
              <MapPinHouse /> <span>Real Estate</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setMenuOpen(false)}
            >
              <UserRound /> Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
