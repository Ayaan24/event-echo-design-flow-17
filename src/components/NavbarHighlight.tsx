
import React from "react";
import { ActiveLink } from "./ui/active-link";
import { useLocation } from "react-router-dom";

export const NavbarHighlight = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">DMK STUDIO</div>
        <div className="hidden md:flex space-x-8">
          <ActiveLink href="/" className={location.pathname === "/" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            HOME
          </ActiveLink>
          <ActiveLink href="/about" className={location.pathname === "/about" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            ABOUT STUDIO
          </ActiveLink>
          <ActiveLink href="/schedule" className={location.pathname === "/schedule" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            CLASS SCHEDULE
          </ActiveLink>
          <ActiveLink 
            href="/classes" 
            className={location.pathname === "/classes" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            TYPES OF CLASSES
          </ActiveLink>
          <ActiveLink href="/buy" className={location.pathname === "/buy" ? "bg-[#ea384c] px-4 py-2 rounded-full" : ""}>
            BUY CLASS TICKET
          </ActiveLink>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
