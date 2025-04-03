
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface EventProps {
  id: number;
  day: string;
  month: string;
  dayOfWeek: string;
  title: string;
  artists: string;
  venue: string;
  location: string;
  image: string;
  isWeekend?: boolean;
}

const EventCard: React.FC<EventProps> = ({ 
  id, day, month, dayOfWeek, title, artists, venue, location, image, isWeekend 
}) => {
  return (
    <div 
      className="group relative mb-6 overflow-hidden rounded-lg bg-studio-darkgray p-1 transition-all duration-300 hover:bg-studio-gray"
      style={{ 
        animationDelay: `${id * 100}ms`,
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image container with overlay */}
        <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg md:mb-0 md:h-64 md:w-64 md:min-w-[16rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity group-hover:opacity-80"></div>
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-3 flex items-baseline">
              <span className="mr-2 text-4xl font-bold text-studio-red transition-all group-hover:text-white">{day}</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                <span className="text-lg text-gray-300">{month}, {dayOfWeek}</span>
                {isWeekend && (
                  <span className="ml-2 rounded-full bg-studio-red px-2 py-0.5 text-xs font-bold text-white">
                    WEEKEND
                  </span>
                )}
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold transition-all group-hover:text-studio-red">{title}</h3>
            <p className="mb-4 text-gray-400 group-hover:text-gray-300">{artists}</p>
            <div className="flex items-center text-gray-400 group-hover:text-gray-300">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{venue} | {location}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-end self-end md:ml-4 md:mt-0 md:pr-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="group/btn relative h-20 w-20 overflow-hidden rounded-full bg-studio-red text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,77,77,0.7)]">
                <div className="absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 group-hover/btn:translate-y-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-sm font-medium">
                  <span>Get Your</span>
                  <span>Ticket</span>
                </div>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto border-studio-red bg-studio-darkgray p-2 text-white">
              <p className="text-sm">Click to book tickets for {title}</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
