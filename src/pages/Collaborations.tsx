
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface Collaborator {
  id: number;
  name: string;
  category: 'Venues' | 'Brands' | 'Artists' | 'Festivals';
  logo: string;
  description: string;
  website?: string;
}

const collaboratorsData: Collaborator[] = [
  // Venues
  {
    id: 1,
    name: "Etihad Arena",
    category: "Venues",
    logo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1170&auto=format&fit=crop",
    description: "The premier entertainment venue in Abu Dhabi, hosting major concerts and sporting events.",
    website: "https://www.etihadarena.ae"
  },
  {
    id: 2,
    name: "Coca-Cola Arena",
    category: "Venues",
    logo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop",
    description: "Dubai's leading multipurpose indoor arena with a capacity of 17,000.",
    website: "https://www.coca-cola-arena.com"
  },
  {
    id: 3,
    name: "Royal Opera House Mumbai",
    category: "Venues",
    logo: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1169&auto=format&fit=crop",
    description: "Historic venue specializing in classical performances and operas.",
    website: "https://www.roh.org.in"
  },
  
  // Brands
  {
    id: 4,
    name: "SoundWave Electronics",
    category: "Brands",
    logo: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1170&auto=format&fit=crop",
    description: "Leading provider of professional audio equipment for studios and live events.",
    website: "https://www.soundwave.com"
  },
  {
    id: 5,
    name: "Pulse Energy Drinks",
    category: "Brands",
    logo: "https://images.unsplash.com/photo-1527271982979-83fea3eb3582?q=80&w=1074&auto=format&fit=crop",
    description: "Premium energy drink brand sponsoring major music festivals across India.",
    website: "https://www.pulseenergy.com"
  },
  {
    id: 6,
    name: "UrbanThreads Apparel",
    category: "Brands",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1170&auto=format&fit=crop",
    description: "Streetwear brand creating exclusive merchandise for music artists and festivals.",
    website: "https://www.urbanthreads.com"
  },
  
  // Artists
  {
    id: 7,
    name: "Rhythmic Pulse Collective",
    category: "Artists",
    logo: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1170&auto=format&fit=crop",
    description: "A dynamic group of percussionists blending traditional and contemporary styles.",
    website: "https://www.rhythmicpulse.com"
  },
  {
    id: 8,
    name: "Electronic Frontier",
    category: "Artists",
    logo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop",
    description: "Cutting-edge electronic music duo known for immersive audiovisual performances.",
    website: "https://www.electronicfrontier.com"
  },
  {
    id: 9,
    name: "Aria Strings",
    category: "Artists",
    logo: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1170&auto=format&fit=crop",
    description: "Classical string quartet reinterpreting contemporary music through a classical lens.",
    website: "https://www.ariastrings.com"
  },
  
  // Festivals
  {
    id: 10,
    name: "Sunburn Festival",
    category: "Festivals",
    logo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop",
    description: "Asia's largest electronic dance music festival, attracting global talent and audiences.",
    website: "https://www.sunburn.in"
  },
  {
    id: 11,
    name: "Rhythms International",
    category: "Festivals",
    logo: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1170&auto=format&fit=crop",
    description: "World music festival celebrating diverse musical traditions from across the globe.",
    website: "https://www.rhythmsinternational.com"
  },
  {
    id: 12,
    name: "Indie Spotlight",
    category: "Festivals",
    logo: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1170&auto=format&fit=crop",
    description: "Showcase festival featuring emerging independent artists from across India.",
    website: "https://www.indiespotlight.com"
  }
];

const Collaborations: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  
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
  
  const filteredCollaborators = activeCategory === 'all' 
    ? collaboratorsData 
    : collaboratorsData.filter(c => c.category === activeCategory);
  
  return (
    <main className="min-h-screen bg-studio-black text-white antialiased">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-16 text-center text-7xl font-bold leading-none tracking-tighter text-white animate-fade-in md:text-8xl">COLLABORATIONS</h1>
          
          <div data-animate className="mb-16 max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-gray-300">
              At DMK Studio, we believe in the power of collaboration. We partner with venues, brands, artists, and festivals to create extraordinary experiences that resonate with audiences.
            </p>
          </div>
          
          <div data-animate className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {['all', 'Venues', 'Brands', 'Artists', 'Festivals'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-studio-red text-white' 
                    : 'bg-studio-darkgray text-gray-300 hover:bg-studio-gray'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCollaborators.map((collaborator, index) => (
              <div 
                key={collaborator.id} 
                data-animate 
                className="group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent"></div>
                  <img 
                    src={collaborator.logo} 
                    alt={collaborator.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-1">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium text-white
                        ${collaborator.category === 'Venues' ? 'bg-blue-600' : 
                          collaborator.category === 'Brands' ? 'bg-green-600' : 
                          collaborator.category === 'Artists' ? 'bg-purple-600' : 'bg-orange-600'}`
                      }>
                        {collaborator.category}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-studio-red">
                      {collaborator.name}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {collaborator.description}
                    </p>
                    
                    {collaborator.website && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <a 
                            href={collaborator.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-studio-red hover:underline"
                          >
                            Visit website <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto border-studio-red bg-studio-darkgray p-2 text-white">
                          <p className="text-sm">Opens in a new tab</p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section data-animate className="relative overflow-hidden py-24 bg-studio-darkgray">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Become a Collaborator</h2>
          <p className="mb-8 mx-auto max-w-2xl text-gray-300">
            Interested in partnering with DMK Studio? We're always looking to collaborate with 
            innovative venues, brands, artists, and festivals that share our passion for 
            creating extraordinary experiences.
          </p>
          <button className="group relative overflow-hidden rounded-full bg-studio-red px-8 py-3 font-medium text-white transition-all hover:bg-opacity-90">
            <div className="absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0"></div>
            <span className="relative z-10 flex items-center">
              Contact Our Partnership Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Collaborations;
