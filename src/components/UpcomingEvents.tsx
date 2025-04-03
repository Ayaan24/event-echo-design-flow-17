
import React from 'react';
import { MapPin } from 'lucide-react';

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
}

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
    },
    {
      id: 3,
      day: "25",
      month: "June",
      dayOfWeek: "Tuesday",
      title: "The Ocean",
      artists: "The Ocean",
      venue: "P7 Arena Media One Hotel",
      location: "Dubai",
      image: "/lovable-uploads/a6873780-02ac-48f2-bb6a-c45e76f36b24.png",
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
      image: "/public/placeholder.svg",
    },
  ],
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="event-card group mb-6 animate-fade-in" style={{ animationDelay: `${event.id * 100}ms` }}>
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-6">
          <img 
            src={event.image} 
            alt={event.title} 
            className="h-48 w-full rounded-lg object-cover md:h-52 md:w-52"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-2 flex items-baseline">
              <span className="mr-2 text-4xl font-bold text-studio-red">{event.day}</span>
              <span className="text-lg">{event.month}, {event.dayOfWeek}</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold transition-all group-hover:text-studio-red">{event.title}</h3>
            <p className="mb-4 text-gray-400">{event.artists}</p>
            <div className="flex items-center text-gray-400">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{event.venue} | {event.location}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end self-end md:ml-4 md:mt-0">
          <a href="#" className="ticket-button h-16 w-16 group-hover:animate-pulse-light">
            <div className="flex flex-col items-center justify-center text-xs">
              <span>Get Your</span>
              <span>Ticket</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">OUR UPCOMING EVENTS</h2>
        
        {Object.entries(eventData).map(([month, events]) => (
          <div key={month} className="mb-16">
            <h3 className="mb-8 text-3xl font-bold">{month}</h3>
            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
