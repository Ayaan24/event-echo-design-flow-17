import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-studio-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <a href="/" className="flex items-center text-3xl font-bold text-white">
              <span className="mr-1">DMK</span>
              <span className="text-2xl">STUDIO</span>
            </a>
            <p className="text-gray-400">
              Creating unforgettable musical experiences and connecting artists with audiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-studio-red">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-studio-red">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-studio-red">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-studio-red">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-studio-red">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Shop</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-studio-red">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Private Lessons</a></li>
              <li><a href="#" className="text-gray-400 hover:text-studio-red">Corporate Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-gray-400">Subscribe to get updates on new events and special offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="w-full rounded-l-md border-none bg-studio-darkgray px-4 py-2 focus:outline-none" />
              <button className="rounded-r-md bg-studio-red px-4 py-2 font-medium text-white hover:bg-opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-studio-darkgray pt-8 md:flex-row">
          <p className="mb-4 text-center text-gray-400 md:mb-0">
            &copy; {new Date().getFullYear()} 1M Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-studio-red">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-studio-red">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-studio-red">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-studio-red text-white shadow-lg transition-all hover:bg-opacity-90">
        <ChevronUp className="h-6 w-6" />
      </button>
    </footer>;
};
export default Footer;