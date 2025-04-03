
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ScheduleHeader from '../components/ScheduleHeader';
import ScheduleFilters from '../components/ScheduleFilters';
import UpcomingEvents from '../components/UpcomingEvents';
import GrabTickets from '../components/GrabTickets';
import PastShows from '../components/PastShows';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal animation to elements with data-animate attribute
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
      
      <ScheduleHeader />
      <ScheduleFilters />
      
      <UpcomingEvents />
      
      <div data-animate>
        <GrabTickets />
      </div>
      
      <div data-animate>
        <PastShows />
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
