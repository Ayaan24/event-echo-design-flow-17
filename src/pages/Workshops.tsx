
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Workshop {
  id: number;
  title: string;
  instructor: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  capacity: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}

const workshopsData: Workshop[] = [
  {
    id: 1,
    title: "Sound Engineering Masterclass",
    instructor: "Alex Rivera",
    date: "June 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "DMK Studio Mumbai",
    description: "Learn professional sound engineering techniques from industry veteran Alex Rivera. This hands-on workshop covers mixing, mastering, and live sound production.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1170&auto=format&fit=crop",
    capacity: 20,
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Music Production Fundamentals",
    instructor: "Priya Sharma",
    date: "July 8, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "DMK Studio Delhi",
    description: "Perfect for beginners, this workshop introduces the essentials of music production using industry-standard DAWs. Create your first track by the end of the day!",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1170&auto=format&fit=crop",
    capacity: 15,
    level: "Beginner"
  },
  {
    id: 3,
    title: "Advanced DJ Techniques",
    instructor: "DJ Nexus",
    date: "August 12, 2024",
    time: "2:00 PM - 7:00 PM",
    location: "Club Enigma, Bangalore",
    description: "Take your DJ skills to the next level with this advanced workshop covering harmonic mixing, creative transitions, and cutting-edge performance techniques.",
    image: "https://images.unsplash.com/photo-1571835782488-1c6e0a7a1c7a?q=80&w=1074&auto=format&fit=crop",
    capacity: 12,
    level: "Advanced"
  },
  {
    id: 4,
    title: "Event Management 101",
    instructor: "Rahul Mehta",
    date: "September 5, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "DMK Studio Hyderabad",
    description: "Learn the fundamentals of event planning, logistics, and execution from our expert team. Includes real-world case studies and hands-on planning exercises.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1073&auto=format&fit=crop",
    capacity: 25,
    level: "All Levels"
  },
  {
    id: 5,
    title: "Stage Lighting Design",
    instructor: "Maya Johnson",
    date: "October 10, 2024",
    time: "1:00 PM - 6:00 PM",
    location: "DMK Studio Chennai",
    description: "Explore the art and science of stage lighting with industry professional Maya Johnson. Covers lighting design principles, equipment selection, and programming.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop",
    capacity: 18,
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Artist Branding Workshop",
    instructor: "Vikram Patel",
    date: "November 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "DMK Studio Kolkata",
    description: "Develop a compelling artist brand with this comprehensive workshop covering visual identity, social media strategy, and audience engagement tactics.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop",
    capacity: 20,
    level: "All Levels"
  }
];

const Workshops: React.FC = () => {
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
          <h1 className="mb-16 text-center text-7xl font-bold leading-none tracking-tighter text-white animate-fade-in md:text-8xl">WORKSHOPS</h1>
          
          <div data-animate className="mb-16 max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-300">
              Take your skills to the next level with our industry-leading workshops. Learn from seasoned professionals in intimate, hands-on sessions designed to accelerate your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workshopsData.map((workshop, index) => (
              <div 
                key={workshop.id} 
                data-animate 
                className="group h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full overflow-hidden border-studio-gray bg-studio-darkgray text-white transition-all duration-300 hover:border-studio-red hover:shadow-[0_0_15px_rgba(34,34,34,0.6)]">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-studio-black/70 to-transparent opacity-60 transition-opacity group-hover:opacity-80 z-10"></div>
                    <img 
                      src={workshop.image} 
                      alt={workshop.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium text-white
                        ${workshop.level === 'Beginner' ? 'bg-green-600' : 
                          workshop.level === 'Intermediate' ? 'bg-yellow-600' : 
                          workshop.level === 'Advanced' ? 'bg-red-600' : 'bg-blue-600'}`
                      }>
                        {workshop.level}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold transition-colors group-hover:text-studio-red">
                      {workshop.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      by {workshop.instructor}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 pb-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="mr-2 h-4 w-4 text-studio-red" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="mr-2 h-4 w-4 text-studio-red" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="mr-2 h-4 w-4 text-studio-red" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="mr-2 h-4 w-4 text-studio-red" />
                      Limited to {workshop.capacity} participants
                    </div>
                    <p className="pt-2 text-sm text-gray-300">
                      {workshop.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter>
                    <button className="mt-2 w-full rounded-full bg-studio-red px-4 py-2 font-medium text-white transition-all hover:bg-opacity-90 hover:shadow-[0_0_10px_rgba(255,77,77,0.5)]">
                      Register Now
                    </button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section data-animate className="py-16 bg-studio-darkgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Request a Custom Workshop</h2>
          <p className="mb-8 mx-auto max-w-2xl text-gray-300">
            Looking for specialized training for your team or organization? 
            We offer customized workshops tailored to your specific needs and goals.
          </p>
          <button className="group relative overflow-hidden rounded-full bg-studio-red px-8 py-3 font-medium text-white transition-all hover:bg-opacity-90">
            <div className="absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0"></div>
            <span className="relative z-10">Contact Us for Custom Workshops</span>
          </button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Workshops;
