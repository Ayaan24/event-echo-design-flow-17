
import React, { useEffect, useRef } from 'react';

const GrabTickets: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.min(0.6, 0.3 + scrollPosition * 0.0005);
      imageRef.current.style.opacity = opacity.toString();
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative mb-16 overflow-hidden py-32">
      {/* Background image with audience hands */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"
      />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start md:w-2/3">
          <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
            GRAB YOUR UNFOLD <br /> 2024 TICKETS
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            Join the industry's brightest thinkers for an unforgettable day of inspiration. Let's shape hospitality's future together.
          </p>
          <a 
            href="#" 
            className="ticket-button-filled group h-24 w-24 animate-pulse-light"
          >
            <div className="flex flex-col items-center justify-center text-sm">
              <span>Get Your</span>
              <span>Ticket</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrabTickets;
