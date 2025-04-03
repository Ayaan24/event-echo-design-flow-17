
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
  "Delhi", "North Delhi", "South Delhi", "IBIZA", "Chandigarh", "Ludhiana", "Kolkata", 
  "Siliguri", "Guwahti", "Dehradun", "Jaipur", "Indore", "Bhopal"
];

const eventData: Record<string, Event[]> = {
  "May 2025": [
    {
      id: 1,
      day: "08",
      month: "May",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 2,
      day: "09",
      month: "May",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 3,
      day: "10",
      month: "May",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "EIGHT",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Mumbai"
    },
    {
      id: 4,
      day: "11",
      month: "May",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "EIGHT",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Mumbai"
    },
    {
      id: 5,
      day: "12",
      month: "May",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "TVDC",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Pune"
    },
    {
      id: 6,
      day: "13",
      month: "May",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "TVDC",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Pune"
    },
    {
      id: 7,
      day: "14",
      month: "May",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "PRATEEK",
      location: "Nagpur",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Nagpur"
    },
    {
      id: 8,
      day: "15",
      month: "May",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "MOVES",
      location: "Vadora",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Vadora"
    },
    {
      id: 9,
      day: "16",
      month: "May",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "HAPPENING SPACE SURAT",
      location: "Surat",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Surat"
    },
    {
      id: 10,
      day: "17",
      month: "May",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "RUH",
      location: "Ahmebdabad",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Ahmebdabad"
    },
    {
      id: 11,
      day: "18",
      month: "May",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "RUH",
      location: "Ahmebdabad",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Ahmebdabad"
    },
    {
      id: 12,
      day: "19",
      month: "May",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 13,
      day: "20",
      month: "May",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 14,
      day: "21",
      month: "May",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 15,
      day: "22",
      month: "May",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "NICY JOSEPH",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Hyderabad"
    },
    {
      id: 16,
      day: "23",
      month: "May",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "THE DANCE BLOCK",
      location: "Kochi",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Kochi"
    },
    {
      id: 17,
      day: "24",
      month: "May",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "TATTVA",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Chennai"
    },
    {
      id: 18,
      day: "25",
      month: "May",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "VINS",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Bangalore"
    },
    {
      id: 19,
      day: "26",
      month: "May",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "VINS",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Bangalore"
    },
    {
      id: 20,
      day: "27",
      month: "May",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "Bangalore T",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Bangalore"
    },
    {
      id: 21,
      day: "28",
      month: "May",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 22,
      day: "29",
      month: "May",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 23,
      day: "30",
      month: "May",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "QALA",
      location: "Gurgaon",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Gurgaon"
    },
    {
      id: 24,
      day: "31",
      month: "May",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "MALANG",
      location: "North Delhi",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "North Delhi"
    },
  ],
  "June 2025": [
    {
      id: 25,
      day: "01",
      month: "June",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "IFBC",
      location: "South Delhi",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "South Delhi"
    },
    {
      id: 26,
      day: "02",
      month: "June",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "YSDC",
      location: "South Delhi",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "South Delhi"
    },
    {
      id: 27,
      day: "03",
      month: "June",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "10 FT",
      location: "South Delhi T",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "South Delhi"
    },
    {
      id: 28,
      day: "04",
      month: "June",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 29,
      day: "05",
      month: "June",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "IBIZA",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "IBIZA"
    },
    {
      id: 30,
      day: "06",
      month: "June",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "IBIZA",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "IBIZA"
    },
    {
      id: 31,
      day: "07",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "",
      location: "IBIZA",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "IBIZA"
    },
    {
      id: 32,
      day: "08",
      month: "June",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "",
      location: "IBIZA",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "IBIZA"
    },
    {
      id: 33,
      day: "09",
      month: "June",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "IBIZA",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "IBIZA"
    },
    {
      id: 34,
      day: "10",
      month: "June",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 35,
      day: "11",
      month: "June",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 36,
      day: "12",
      month: "June",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "BODY ZONE",
      location: "Chandigarh",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Chandigarh"
    },
    {
      id: 37,
      day: "13",
      month: "June",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "Ludhiana",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Ludhiana"
    },
    {
      id: 38,
      day: "14",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "DANCE DIFFERENT",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Kolkata"
    },
    {
      id: 39,
      day: "15",
      month: "June",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "DANCE DIFFERENT",
      location: "Kolkata",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Kolkata"
    },
    {
      id: 40,
      day: "16",
      month: "June",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "Siliguri",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Siliguri"
    },
    {
      id: 41,
      day: "17",
      month: "June",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "STUDIO 7 GWH",
      location: "Guwahti",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Guwahti"
    },
    {
      id: 42,
      day: "18",
      month: "June",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "HARSHIT",
      location: "Dehradun",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Dehradun"
    },
    {
      id: 43,
      day: "19",
      month: "June",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "IDF JAIPUR",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Jaipur"
    },
    {
      id: 44,
      day: "20",
      month: "June",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "IDF JAIPUR",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Jaipur"
    },
    {
      id: 45,
      day: "21",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "FLY FEET STUDIO",
      location: "Indore",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Indore"
    },
    {
      id: 46,
      day: "22",
      month: "June",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "FEEL THE VIBE STUDIO",
      location: "Bhopal",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Bhopal"
    },
    {
      id: 47,
      day: "23",
      month: "June",
      dayOfWeek: "Monday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 48,
      day: "24",
      month: "June",
      dayOfWeek: "Tuesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 49,
      day: "25",
      month: "June",
      dayOfWeek: "Wednesday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 50,
      day: "26",
      month: "June",
      dayOfWeek: "Thursday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 51,
      day: "27",
      month: "June",
      dayOfWeek: "Friday",
      title: "Workshop Session",
      artists: "Various Artists",
      venue: "",
      location: "",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: ""
    },
    {
      id: 52,
      day: "28",
      month: "June",
      dayOfWeek: "Saturday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "EIGHT",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Mumbai"
    },
    {
      id: 53,
      day: "29",
      month: "June",
      dayOfWeek: "Sunday",
      title: "Weekend Workshop",
      artists: "Various Artists",
      venue: "EIGHT",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop",
      city: "Mumbai"
    },
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
                  event.city && (
                    <EventCard 
                      key={event.id} 
                      {...event} 
                      isWeekend={isWeekend(event.dayOfWeek)} 
                    />
                  )
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
