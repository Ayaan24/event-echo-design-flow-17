
import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { ChevronDown, X } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface Event {
  id: number;
  day: string;
  month: string;
  dayOfWeek: string;
  title: string;
  artists: string;
  venue: string;
  location: string;
  image: string;
  city: string;
}

const cityList = [
  "Mumbai", "Pune", "Nagpur", "Vadora", "Surat", "Ahmebdabad", 
  "Hyderabad", "Kochi", "Chennai", "Bangalore", "Gurgaon", 
  "Delhi", "Ibiza", "Chandigarh", "Ludhiana", "Kolkata", 
  "Siliguri", "Guwahti", "Jaipur", "Indore", "Bhopal"
];

const eventData: Record<string, Event[]> = {
  "June 2024": [
    {
      id: 1,
      day: "07",
      month: "June",
      dayOfWeek: "Friday",
      title: "Shongololo Shuffle: Desert Edition",
      artists: "Dewald Wasserfall, Ampie, Early B, Eloff",
      venue: "Millennium Al Rawdah Hotel",
      location: "Abu Dhabi",
      image: "/lovable-uploads/83f8afa7-2d88-4b23-9716-bcc2a4c896cf.png",
      city: "Mumbai"
    },
    {
      id: 2,
      day: "10",
      month: "June",
      dayOfWeek: "Monday",
      title: "Amr Diab",
      artists: "Amr Diab",
      venue: "Coca-Cola Arena",
      location: "Dubai",
      image: "/lovable-uploads/81181622-1c8c-43b6-80b1-5d4eb2714e00.png",
      city: "Delhi"
    },
    {
      id: 3,
      day: "15",
      month: "June",
      dayOfWeek: "Saturday",
      title: "The Ocean",
      artists: "The Ocean",
      venue: "P7 Arena Media One Hotel",
      location: "Dubai",
      image: "/lovable-uploads/a6873780-02ac-48f2-bb6a-c45e76f36b24.png",
      city: "Bangalore"
    },
    {
      id: 8,
      day: "22",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Jazz Night: Blue Notes",
      artists: "Miles Thompson Quartet",
      venue: "Royal Auditorium",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop",
      city: "Chennai"
    },
    {
      id: 9,
      day: "29",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Techno Pulse",
      artists: "DJ Matrix, Electra Volt",
      venue: "Pulse Nightclub",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1571751239008-50cad6cb9265?q=80&w=1170&auto=format&fit=crop",
      city: "Goa"
    },
  ],
  "July 2024": [
    {
      id: 4,
      day: "05",
      month: "July",
      dayOfWeek: "Friday",
      title: "Cigarettes After Sex",
      artists: "Cigarettes After Sex",
      venue: "Audi 2",
      location: "New Delhi",
      image: "/lovable-uploads/3b939220-2116-4789-b6d7-f5e4ff4f5a8b.png",
      city: "Delhi"
    },
    {
      id: 5,
      day: "14",
      month: "July",
      dayOfWeek: "Sunday",
      title: "Matt Rife: ProbleMATTic World Tour",
      artists: "Matt Rife",
      venue: "Millennium Al Rawdah Hotel",
      location: "Abu Dhabi",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&w=1170&q=80",
      city: "Mumbai"
    },
    {
      id: 10,
      day: "20",
      month: "July",
      dayOfWeek: "Saturday",
      title: "Folk Fusion Festival",
      artists: "Various Artists",
      venue: "Heritage Park",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1032&auto=format&fit=crop",
      city: "Jaipur"
    },
    {
      id: 11,
      day: "27",
      month: "July",
      dayOfWeek: "Saturday",
      title: "Rock Revolution",
      artists: "Thunderstrike, Metal Mavericks",
      venue: "Arena Stadium",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Kolkata"
    }
  ],
  "August 2024": [
    {
      id: 6,
      day: "03",
      month: "August",
      dayOfWeek: "Saturday",
      title: "Summer Beats Festival",
      artists: "David Guetta, Martin Garrix, Alesso",
      venue: "Sunburn Arena",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1170&auto=format&fit=crop",
      city: "Hyderabad"
    },
    {
      id: 7,
      day: "17",
      month: "August",
      dayOfWeek: "Saturday",
      title: "Classical Symphony",
      artists: "Mumbai Philharmonic Orchestra",
      venue: "National Centre for Performing Arts",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1170&auto=format&fit=crop",
      city: "Mumbai"
    },
    {
      id: 12,
      day: "24",
      month: "August",
      dayOfWeek: "Saturday",
      title: "Hip Hop Showcase",
      artists: "Urban Beats Crew",
      venue: "Street Culture Hub",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1571151489226-c23eae565ab6?q=80&w=1074&auto=format&fit=crop",
      city: "Pune"
    }
  ]
};

const UpcomingEvents: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(eventData);

  useEffect(() => {
    if (selectedCity) {
      const filtered: Record<string, Event[]> = {};
      
      Object.keys(eventData).forEach(month => {
        const monthEvents = eventData[month].filter(event => 
          event.city === selectedCity
        );
        
        if (monthEvents.length > 0) {
          filtered[month] = monthEvents;
        }
      });
      
      setFilteredEvents(filtered);
      
      toast({
        title: "Filter Applied",
        description: `Showing events in ${selectedCity}`,
        className: "bg-studio-darkgray text-white border-studio-red",
      });
    } else {
      setFilteredEvents(eventData);
    }
  }, [selectedCity]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const clearFilter = () => {
    setSelectedCity(null);
    toast({
      title: "Filter Cleared",
      description: "Showing all events",
      className: "bg-studio-darkgray text-white border-studio-red",
    });
  };

  // Check if a day is a weekend (Saturday or Sunday)
  const isWeekend = (dayOfWeek: string) => {
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <h2 className="mb-6 text-center text-4xl font-bold md:mb-0 md:text-5xl">OUR UPCOMING EVENTS</h2>
          
          <div className="relative w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between rounded-lg border border-studio-gray bg-studio-darkgray px-4 py-2 text-white transition-all hover:border-studio-red"
                >
                  <span>{selectedCity || "Filter by City"}</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-lg border border-studio-gray bg-studio-black shadow-lg">
                    <div className="p-2">
                      {cityList.map((city) => (
                        <button
                          key={city}
                          onClick={() => handleCitySelect(city)}
                          className={`block w-full rounded px-4 py-2 text-left transition-colors hover:bg-studio-gray ${
                            city === selectedCity ? 'bg-studio-darkgray text-studio-red' : 'text-white'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {selectedCity && (
                <button
                  onClick={clearFilter}
                  className="flex items-center rounded-lg border border-studio-gray bg-studio-darkgray px-3 py-2 text-white transition-all hover:border-studio-red"
                >
                  <X className="mr-1 h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
        
        {Object.keys(filteredEvents).length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center rounded-lg bg-studio-darkgray">
            <p className="text-xl text-gray-400">No events found in {selectedCity}</p>
            <button 
              onClick={clearFilter}
              className="mt-4 rounded-full bg-studio-red px-4 py-2 text-white transition-all hover:bg-opacity-90"
            >
              Show All Events
            </button>
          </div>
        ) : (
          Object.entries(filteredEvents).map(([month, events]) => (
            <div key={month} className="mb-16 animate-fade-in">
              <h3 className="mb-8 text-3xl font-bold">{month}</h3>
              <div className="space-y-6">
                {events.map((event) => (
                  <EventCard 
                    key={event.id} 
                    {...event} 
                    isWeekend={isWeekend(event.dayOfWeek)} 
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
