
import React from "react";
import { Timeline } from "./ui/timeline";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TimelineDemo() {
  const isMobile = useIsMobile();
  
  const data = [
    {
      title: "DMK Studio Launch",
      date: "January 2024",
      content: (
        <div>
          <p className="text-gray-700 text-sm font-normal mb-4">
            DMK Studio opened its doors, offering a premier space for music and arts events in the heart of the city.
          </p>
          <div className={`grid grid-cols-${isMobile ? '1' : '2'} gap-4`}>
            <img
              src="/lovable-uploads/3b939220-2116-4789-b6d7-f5e4ff4f5a8b.png"
              alt="DMK studio event"
              className="rounded-lg object-cover h-40 w-full shadow-md"
            />
            <img
              src="/lovable-uploads/81181622-1c8c-43b6-80b1-5d4eb2714e00.png"
              alt="DMK studio event"
              className="rounded-lg object-cover h-40 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "First Concert Series",
      date: "March 2024",
      content: (
        <div>
          <p className="text-gray-700 text-sm font-normal mb-4">
            Our inaugural concert series featured local artists and brought together music enthusiasts from across the region.
          </p>
          <div className={`grid grid-cols-${isMobile ? '1' : '2'} gap-4`}>
            <img
              src="/lovable-uploads/83f8afa7-2d88-4b23-9716-bcc2a4c896cf.png"
              alt="Concert performance"
              className="rounded-lg object-cover h-40 w-full shadow-md"
            />
            <img
              src="/lovable-uploads/a6873780-02ac-48f2-bb6a-c45e76f36b24.png"
              alt="DMK studio event"
              className="rounded-lg object-cover h-40 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Workshop Program Launch",
      date: "April 2024",
      content: (
        <div>
          <p className="text-gray-700 text-sm font-normal mb-4">
            We launched our comprehensive workshop program, offering classes in music production, performance, and various art forms.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-gray-700 text-sm">
              ✅ Music Production Basics
            </div>
            <div className="flex gap-2 items-center text-gray-700 text-sm">
              ✅ Vocal Performance Workshops
            </div>
            <div className="flex gap-2 items-center text-gray-700 text-sm">
              ✅ Instrument Mastery Series
            </div>
            <div className="flex gap-2 items-center text-gray-700 text-sm">
              ✅ Digital Art & Music Collaboration
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">DMK Studio Journey</h2>
      <Timeline data={data} />
    </div>
  );
}
