
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Award, Headphones, Music, Users } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal animation
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <main className="min-h-screen bg-studio-black text-white antialiased">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-16 text-center text-7xl font-bold leading-none tracking-tighter text-white animate-fade-in md:text-8xl">ABOUT US</h1>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div data-animate className="order-2 md:order-1">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                DMK Studio is a premier entertainment agency specializing in event production, artist management, and venue operations. Founded in 2010, we have quickly established ourselves as industry leaders, creating unforgettable experiences for audiences across the globe.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Our mission is to bridge the gap between artists and audiences, creating meaningful connections through carefully curated experiences. We believe in the transformative power of live entertainment and strive to push boundaries with each production.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With offices in Mumbai, Delhi, and Bangalore, our reach extends throughout India and beyond. Our team of passionate professionals brings decades of combined experience in event management, sound engineering, lighting design, and artist relations.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-studio-darkgray p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-studio-red text-white">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">500+</h3>
                  <p className="text-gray-400">Events Produced</p>
                </div>
                <div className="rounded-lg bg-studio-darkgray p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-studio-red text-white">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">250k+</h3>
                  <p className="text-gray-400">Happy Attendees</p>
                </div>
                <div className="rounded-lg bg-studio-darkgray p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-studio-red text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">100+</h3>
                  <p className="text-gray-400">Artists Represented</p>
                </div>
                <div className="rounded-lg bg-studio-darkgray p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-studio-red text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">15+</h3>
                  <p className="text-gray-400">Industry Awards</p>
                </div>
              </div>
            </div>
            
            <div data-animate className="order-1 md:order-2">
              <div className="relative h-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black to-transparent opacity-60 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="DMK Studio Event" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button className="rounded-full bg-studio-red px-6 py-3 font-medium text-white transition-all hover:bg-opacity-90">
                        Meet Our Team
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 border-studio-red bg-studio-darkgray p-4 text-white">
                      <h4 className="mb-2 text-lg font-bold">Our Leadership Team</h4>
                      <p className="text-sm text-gray-300">
                        Meet the passionate individuals who make DMK Studio the industry leader in event production and artist management.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section data-animate className="py-16 bg-studio-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">OUR EXPERTISE</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-studio-gray p-8 transition-all hover:bg-studio-red hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Event Production</h3>
              <p className="text-gray-300">From intimate club nights to large-scale festivals, we handle every detail of the production process to create seamless and memorable experiences.</p>
            </div>
            <div className="rounded-lg bg-studio-gray p-8 transition-all hover:bg-studio-red hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Artist Management</h3>
              <p className="text-gray-300">We represent a diverse roster of artists, helping them navigate their careers and connect with audiences through strategic booking and promotion.</p>
            </div>
            <div className="rounded-lg bg-studio-gray p-8 transition-all hover:bg-studio-red hover:shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Venue Operations</h3>
              <p className="text-gray-300">Our team partners with prestigious venues across India to optimize operations, enhance audience experiences, and maximize revenue potential.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
