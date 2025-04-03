
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
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg backdrop-blur-sm' : 'bg-black'}`}>
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-4xl font-bold text-white transition-transform hover:scale-105">
            <span className="mr-1 font-extrabold">DMK</span>
            <span className="text-2xl tracking-widest">STUDIO</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/about" className="nav-link text-lg uppercase tracking-widest font-semibold">About</Link>
            </li>
            <li>
              <Link to="/workshops" className="nav-link text-lg uppercase tracking-widest font-semibold">Workshops</Link>
            </li>
            <li>
              <Link to="/collaborations" className="nav-link text-lg uppercase tracking-widest font-semibold">Collaborations</Link>
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
        <div className="absolute left-0 top-full flex w-full flex-col bg-black/95 py-4 shadow-lg backdrop-blur-sm md:hidden animate-fade-in">
          <ul className="flex flex-col">
            <li><Link to="/about" className="block px-4 py-2 hover:bg-studio-darkgray uppercase tracking-widest font-semibold">About</Link></li>
            <li><Link to="/workshops" className="block px-4 py-2 hover:bg-studio-darkgray uppercase tracking-widest font-semibold">Workshops</Link></li>
            <li><Link to="/collaborations" className="block px-4 py-2 hover:bg-studio-darkgray uppercase tracking-widest font-semibold">Collaborations</Link></li>
            <li><a href="#upcoming" className="block px-4 py-2 hover:bg-studio-darkgray uppercase tracking-widest font-semibold">Upcoming Events</a></li>
            <li><a href="#tickets" className="block px-4 py-2 hover:bg-studio-darkgray uppercase tracking-widest font-semibold">Get Tickets</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
