
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: number;
  date: string;
  day: string;
  dayOfWeek: string;
  city: string;
  studio: string;
  isWeekend: boolean;
}

const cities = [
  "All Cities",
  "Mumbai", "Pune", "Nagpur", "Vadodra", "Surat", "Ahembdabad", 
  "Hyderabad", "Kochi", "Chennai", "Bangalore", "Gurgaon", 
  "Delhi", "North Delhi", "South Delhi", "IBIZA", "Chandigarh", "Ludhiana", "Kolkata", 
  "Siliguri", "Guwahti", "Dehradun", "Jaipur", "Indore", "Bhopal"
];

const eventsData: Event[] = [
  { id: 1, date: "8 May 2025", day: "8", dayOfWeek: "THURSDAY", city: "Mumbai", studio: "EIGHT", isWeekend: false },
  { id: 2, date: "9 May 2025", day: "9", dayOfWeek: "FRIDAY", city: "Mumbai", studio: "EIGHT", isWeekend: false },
  { id: 3, date: "10 May 2025", day: "10", dayOfWeek: "SATURDAY", city: "Mumbai", studio: "EIGHT", isWeekend: true },
  { id: 4, date: "11 May 2025", day: "11", dayOfWeek: "SUNDAY", city: "Mumbai", studio: "EIGHT", isWeekend: true },
  { id: 5, date: "12 May 2025", day: "12", dayOfWeek: "MONDAY", city: "Pune", studio: "TVDC", isWeekend: false },
  { id: 6, date: "13 May 2025", day: "13", dayOfWeek: "TUESDAY", city: "Pune", studio: "TVDC", isWeekend: false },
  { id: 7, date: "14 May 2025", day: "14", dayOfWeek: "WEDNESDAY", city: "Nagpur", studio: "PRATEEK", isWeekend: false },
  { id: 8, date: "15 May 2025", day: "15", dayOfWeek: "THURSDAY", city: "Vadodra", studio: "MOVES", isWeekend: false },
  { id: 9, date: "16 May 2025", day: "16", dayOfWeek: "FRIDAY", city: "Surat", studio: "HAPPENING SPACE SURAT", isWeekend: false },
  { id: 10, date: "17 May 2025", day: "17", dayOfWeek: "SATURDAY", city: "Ahembdabad", studio: "RUH", isWeekend: true },
  { id: 11, date: "18 May 2025", day: "18", dayOfWeek: "SUNDAY", city: "Ahembdabad", studio: "RUH", isWeekend: true },
  { id: 12, date: "19 May 2025", day: "19", dayOfWeek: "MONDAY", city: "Hyderabad", studio: "NICY JOSEPH", isWeekend: false },
  { id: 13, date: "20 May 2025", day: "20", dayOfWeek: "TUESDAY", city: "Hyderabad", studio: "NICY JOSEPH", isWeekend: false },
  { id: 14, date: "21 May 2025", day: "21", dayOfWeek: "WEDNESDAY", city: "Hyderabad", studio: "NICY JOSEPH", isWeekend: false },
  { id: 15, date: "22 May 2025", day: "22", dayOfWeek: "THURSDAY", city: "Hyderabad", studio: "NICY JOSEPH", isWeekend: false },
  { id: 16, date: "23 May 2025", day: "23", dayOfWeek: "FRIDAY", city: "Kochi", studio: "THE DANCE BLOCK", isWeekend: false },
  { id: 17, date: "24 May 2025", day: "24", dayOfWeek: "SATURDAY", city: "Chennai", studio: "TATTVA", isWeekend: true },
  { id: 18, date: "25 May 2025", day: "25", dayOfWeek: "SUNDAY", city: "Bangalore", studio: "VINS", isWeekend: true },
  { id: 19, date: "26 May 2025", day: "26", dayOfWeek: "MONDAY", city: "Bangalore", studio: "VINS", isWeekend: false },
  { id: 20, date: "27 May 2025", day: "27", dayOfWeek: "TUESDAY", city: "Bangalore T", studio: "", isWeekend: false },
  { id: 21, date: "28 May 2025", day: "28", dayOfWeek: "WEDNESDAY", city: "", studio: "", isWeekend: false },
  { id: 22, date: "29 May 2025", day: "29", dayOfWeek: "THURSDAY", city: "", studio: "", isWeekend: false },
  { id: 23, date: "30 May 2025", day: "30", dayOfWeek: "FRIDAY", city: "Gurgaon", studio: "QALA", isWeekend: false },
  { id: 24, date: "31 May 2025", day: "31", dayOfWeek: "SATURDAY", city: "North Delhi", studio: "MALANG", isWeekend: true },
  { id: 25, date: "1 June 2025", day: "1", dayOfWeek: "SUNDAY", city: "South Delhi", studio: "IFBC", isWeekend: true },
  { id: 26, date: "2 June 2025", day: "2", dayOfWeek: "MONDAY", city: "South Delhi", studio: "YSDC", isWeekend: false },
  { id: 27, date: "3 June 2025", day: "3", dayOfWeek: "TUESDAY", city: "South Delhi T", studio: "10 FT", isWeekend: false },
  { id: 28, date: "4 June 2025", day: "4", dayOfWeek: "WEDNESDAY", city: "", studio: "", isWeekend: false },
  { id: 29, date: "5 June 2025", day: "5", dayOfWeek: "THURSDAY", city: "IBIZA", studio: "", isWeekend: false },
  { id: 30, date: "6 June 2025", day: "6", dayOfWeek: "FRIDAY", city: "IBIZA", studio: "", isWeekend: false },
  { id: 31, date: "7 June 2025", day: "7", dayOfWeek: "SATURDAY", city: "IBIZA", studio: "", isWeekend: true },
  { id: 32, date: "8 June 2025", day: "8", dayOfWeek: "SUNDAY", city: "IBIZA", studio: "", isWeekend: true },
  { id: 33, date: "9 June 2025", day: "9", dayOfWeek: "MONDAY", city: "IBIZA", studio: "", isWeekend: false },
  { id: 34, date: "10 June 2025", day: "10", dayOfWeek: "TUESDAY", city: "", studio: "", isWeekend: false },
  { id: 35, date: "11 June 2025", day: "11", dayOfWeek: "WEDNESDAY", city: "", studio: "", isWeekend: false },
  { id: 36, date: "12 June 2025", day: "12", dayOfWeek: "THURSDAY", city: "Chandigarh", studio: "BODY ZONE", isWeekend: false },
  { id: 37, date: "13 June 2025", day: "13", dayOfWeek: "FRIDAY", city: "Ludhiana", studio: "", isWeekend: false },
  { id: 38, date: "14 June 2025", day: "14", dayOfWeek: "SATURDAY", city: "Kolkata", studio: "DANCE DIFFERENT", isWeekend: true },
  { id: 39, date: "15 June 2025", day: "15", dayOfWeek: "SUNDAY", city: "Kolkata", studio: "DANCE DIFFERENT", isWeekend: true },
  { id: 40, date: "16 June 2025", day: "16", dayOfWeek: "MONDAY", city: "Siliguri", studio: "", isWeekend: false },
  { id: 41, date: "17 June 2025", day: "17", dayOfWeek: "TUESDAY", city: "Guwahti", studio: "STUDIO 7 GWH", isWeekend: false },
  { id: 42, date: "18 June 2025", day: "18", dayOfWeek: "WEDNESDAY", city: "Dehradun", studio: "HARSHIT", isWeekend: false },
  { id: 43, date: "19 June 2025", day: "19", dayOfWeek: "THURSDAY", city: "Jaipur", studio: "IDF JAIPUR", isWeekend: false },
  { id: 44, date: "20 June 2025", day: "20", dayOfWeek: "FRIDAY", city: "Jaipur", studio: "IDF JAIPUR", isWeekend: false },
  { id: 45, date: "21 June 2025", day: "21", dayOfWeek: "SATURDAY", city: "Indore", studio: "FLY FEET STUDIO", isWeekend: true },
  { id: 46, date: "22 June 2025", day: "22", dayOfWeek: "SUNDAY", city: "Bhopal", studio: "FEEL THE VIBE STUDIO", isWeekend: true },
  { id: 47, date: "23 June 2025", day: "23", dayOfWeek: "MONDAY", city: "", studio: "", isWeekend: false },
  { id: 48, date: "24 June 2025", day: "24", dayOfWeek: "TUESDAY", city: "", studio: "", isWeekend: false },
  { id: 49, date: "25 June 2025", day: "25", dayOfWeek: "WEDNESDAY", city: "", studio: "", isWeekend: false },
  { id: 50, date: "26 June 2025", day: "26", dayOfWeek: "THURSDAY", city: "", studio: "", isWeekend: false },
  { id: 51, date: "27 June 2025", day: "27", dayOfWeek: "FRIDAY", city: "", studio: "", isWeekend: false },
  { id: 52, date: "28 June 2025", day: "28", dayOfWeek: "SATURDAY", city: "Mumbai", studio: "EIGHT", isWeekend: true },
  { id: 53, date: "29 June 2025", day: "29", dayOfWeek: "SUNDAY", city: "Mumbai", studio: "EIGHT", isWeekend: true },
];

// Group the events by month
const groupEventsByMonth = (events: Event[]) => {
  const grouped: Record<string, Event[]> = {};
  
  events.forEach(event => {
    if (!event.city) return; // Skip events with no city
    
    const dateParts = event.date.split(' ');
    if (dateParts.length < 3) return;
    
    const month = dateParts[1] + ' ' + dateParts[2];
    
    if (!grouped[month]) {
      grouped[month] = [];
    }
    
    grouped[month].push(event);
  });
  
  return grouped;
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className={`event-card group mb-6 animate-fade-in ${event.isWeekend ? 'weekend-event' : ''}`}>
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 flex-shrink-0 md:mb-0 md:mr-6">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-lg bg-studio-darkgray md:h-52 md:w-52">
            <div className="text-4xl font-bold text-white">{event.day}</div>
            <div className="text-lg text-white">{event.dayOfWeek}</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-2 flex items-baseline">
              <span className="mr-2 text-4xl font-bold text-studio-red">{event.day}</span>
              <span className="text-lg">{event.date}</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold capitalize transition-all group-hover:text-studio-red">{event.studio || "Studio To Be Announced"}</h3>
            <div className="flex items-center space-x-1 text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{event.dayOfWeek}</span>
            </div>
            <div className="mt-2 flex items-center space-x-1 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{event.city}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end self-end md:ml-4 md:mt-0">
          <a href="#" className="h-16 w-16 rounded-full bg-studio-red p-2 text-center text-white transition-all hover:bg-opacity-80 group-hover:animate-pulse-light">
            <div className="flex h-full w-full flex-col items-center justify-center text-xs">
              <span>Get</span>
              <span>Ticket</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const EventsListPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const [filteredEvents, setFilteredEvents] = useState<Record<string, Event[]>>({});
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  
  const ITEMS_TO_SHOW = 3;

  useEffect(() => {
    // Filter events based on selected city
    const filtered = eventsData.filter(event => 
      selectedCity === "All Cities" ? true : event.city === selectedCity
    );
    
    // Group filtered events by month
    const grouped = groupEventsByMonth(filtered);
    setFilteredEvents(grouped);
    
    // Reset expanded state when filter changes
    setExpandedMonths({});
    
    // Show toast notification when filter changes
    if (selectedCity !== "All Cities") {
      toast({
        title: "Filter Applied",
        description: `Showing events in ${selectedCity}`,
        duration: 3000,
      });
    }
  }, [selectedCity, toast]);

  // Get total event count
  const totalEventCount = Object.values(filteredEvents).reduce(
    (count, events) => count + events.length, 
    0
  );

  const toggleMonthExpansion = (month: string) => {
    setExpandedMonths(prev => ({
      ...prev,
      [month]: !prev[month]
    }));
  };

  // Function to determine how many events to show for a month
  const getVisibleEvents = (month: string, events: Event[]) => {
    // When filtering by city, show all events
    if (selectedCity !== "All Cities") {
      return events;
    }
    
    // If month is expanded, show all events, otherwise show only ITEMS_TO_SHOW
    return expandedMonths[month] ? events : events.slice(0, ITEMS_TO_SHOW);
  };

  return (
    <section className="py-16 max-w-[100vw] overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-3xl md:text-4xl font-bold max-w-full overflow-hidden text-ellipsis">UPCOMING EVENTS</h2>
          
          <div className="flex w-full items-center space-x-4 md:w-auto">
            <div className="w-full md:w-64">
              <Select 
                value={selectedCity} 
                onValueChange={(value) => setSelectedCity(value)}
              >
                <SelectTrigger className="border-studio-gray bg-studio-darkgray text-white">
                  <SelectValue placeholder="Filter by City" />
                </SelectTrigger>
                <SelectContent className="border-studio-gray bg-studio-black text-white">
                  {cities.map((city) => (
                    <SelectItem key={city} value={city} className="focus:bg-studio-darkgray focus:text-white">
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="mb-4 text-gray-400">
          {totalEventCount} {totalEventCount === 1 ? 'event' : 'events'} found
        </div>
        
        {Object.keys(filteredEvents).length > 0 ? (
          Object.entries(filteredEvents).map(([month, events]) => (
            <div key={month} className="mb-16 animate-fade-in">
              <h3 className="mb-8 text-2xl md:text-3xl font-bold">{month}</h3>
              <div className="space-y-4">
                {getVisibleEvents(month, events).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              
              {/* Only show "See More" button if there are more than ITEMS_TO_SHOW events and not filtering by city */}
              {selectedCity === "All Cities" && events.length > ITEMS_TO_SHOW && (
                <button 
                  onClick={() => toggleMonthExpansion(month)}
                  className="mt-6 flex items-center gap-2 rounded-lg px-4 py-2 text-studio-red hover:text-white hover:bg-studio-red transition-colors"
                >
                  {expandedMonths[month] ? (
                    <>
                      <span>See Less</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>See All ({events.length})</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="mb-4 text-2xl font-bold">No events found</p>
            <p className="text-gray-400">Try selecting a different city or clear the filter.</p>
            <button 
              className="mt-6 rounded bg-studio-red px-6 py-3 text-white transition-all hover:bg-opacity-80"
              onClick={() => setSelectedCity("All Cities")}
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsListPage;
