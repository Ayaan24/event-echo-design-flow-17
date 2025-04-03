
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="flex items-center text-3xl font-bold text-white transition-transform hover:scale-105">
            <span className="mr-1">DMK</span>
            <span className="text-2xl">STUDIO</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/about" className="nav-link text-base uppercase tracking-wider">About</Link>
            </li>
            <li>
              <Link to="/workshops" className="nav-link text-base uppercase tracking-wider">Workshops</Link>
            </li>
            <li>
              <Link to="/collaborations" className="nav-link text-base uppercase tracking-wider">Collaborations</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="inline-flex items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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
            <li><Link to="/about" className="block px-4 py-2 hover:bg-studio-darkgray">ABOUT</Link></li>
            <li><Link to="/workshops" className="block px-4 py-2 hover:bg-studio-darkgray">WORKSHOPS</Link></li>
            <li><Link to="/collaborations" className="block px-4 py-2 hover:bg-studio-darkgray">COLLABORATIONS</Link></li>
            <li><a href="#upcoming" className="block px-4 py-2 hover:bg-studio-darkgray">UPCOMING EVENTS</a></li>
            <li><a href="#tickets" className="block px-4 py-2 hover:bg-studio-darkgray">GET TICKETS</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
