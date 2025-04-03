
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-studio-black/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center text-3xl font-bold text-white">
            <span className="mr-1">1M</span>
            <span className="text-2xl">STUDIO</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#about" className="nav-link uppercase">About Studio</a></li>
            <li><a href="#schedule" className="nav-link uppercase">Class Schedule</a></li>
            <li><a href="#classes" className="nav-link uppercase">Types of Classes</a></li>
            <li><a href="#tickets" className="nav-link uppercase">Buy Class Ticket</a></li>
            <li><a href="#shop" className="nav-link uppercase">Shop</a></li>
          </ul>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <div className="relative group">
            <button className="nav-link uppercase">My Account</button>
            <div className="absolute right-0 top-8 hidden min-w-[180px] flex-col bg-studio-darkgray rounded-md shadow-lg p-2 group-hover:flex">
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">Profile</a>
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">My Tickets</a>
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">Sign Out</a>
            </div>
          </div>
          <div className="relative group">
            <button className="nav-link uppercase">English</button>
            <div className="absolute right-0 top-8 hidden min-w-[150px] flex-col bg-studio-darkgray rounded-md shadow-lg p-2 group-hover:flex">
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">English</a>
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">Arabic</a>
              <a href="#" className="px-4 py-2 hover:bg-studio-gray rounded">French</a>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="inline-flex items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col bg-studio-black/95 py-4 shadow-lg backdrop-blur-sm md:hidden animate-fade-in">
          <ul className="flex flex-col">
            <li><a href="#about" className="block px-4 py-2 hover:bg-studio-darkgray">ABOUT STUDIO</a></li>
            <li><a href="#schedule" className="block px-4 py-2 hover:bg-studio-darkgray">CLASS SCHEDULE</a></li>
            <li><a href="#classes" className="block px-4 py-2 hover:bg-studio-darkgray">TYPES OF CLASSES</a></li>
            <li><a href="#tickets" className="block px-4 py-2 hover:bg-studio-darkgray">BUY CLASS TICKET</a></li>
            <li><a href="#shop" className="block px-4 py-2 hover:bg-studio-darkgray">SHOP</a></li>
            <li><a href="#account" className="block px-4 py-2 hover:bg-studio-darkgray">MY ACCOUNT</a></li>
            <li><a href="#language" className="block px-4 py-2 hover:bg-studio-darkgray">ENGLISH</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
