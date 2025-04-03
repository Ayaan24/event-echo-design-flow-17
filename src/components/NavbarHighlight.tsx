
import React, { useState } from "react";
import { ActiveLink } from "./ui/active-link";
import { useLocation } from "react-router-dom";

export const NavbarHighlight = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl md:text-2xl font-bold">DMK STUDIO</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-transparent border-none text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <ActiveLink href="/about">ABOUT STUDIO</ActiveLink>
          <ActiveLink href="/schedule">CLASS SCHEDULE</ActiveLink>
          <ActiveLink 
            href="/classes" 
            className={location.pathname === "/classes" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            TYPES OF CLASSES
          </ActiveLink>
          <ActiveLink href="/buy">BUY CLASS TICKET</ActiveLink>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <ActiveLink 
              href="/about" 
              className="block py-2 px-4 hover:bg-gray-800 rounded" 
              onClick={() => setIsMenuOpen(false)}>
              ABOUT STUDIO
            </ActiveLink>
            <ActiveLink 
              href="/schedule" 
              className="block py-2 px-4 hover:bg-gray-800 rounded" 
              onClick={() => setIsMenuOpen(false)}>
              CLASS SCHEDULE
            </ActiveLink>
            <ActiveLink 
              href="/classes" 
              className={`block py-2 px-4 hover:bg-gray-800 rounded ${location.pathname === "/classes" ? "bg-[#ea384c]" : ""}`}
              onClick={() => setIsMenuOpen(false)}>
              TYPES OF CLASSES
            </ActiveLink>
            <ActiveLink 
              href="/buy" 
              className="block py-2 px-4 hover:bg-gray-800 rounded" 
              onClick={() => setIsMenuOpen(false)}>
              BUY CLASS TICKET
            </ActiveLink>
          </div>
        </div>
      )}
    </nav>
  );
};
