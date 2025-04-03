
"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const items = container.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isVisible) {
          setActiveIndex(index);
          item.classList.add('timeline-item-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full px-4 py-12 relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
      
      {data.map((item, index) => (
        <div 
          key={index}
          className={cn(
            "timeline-item relative flex flex-col md:flex-row md:even:flex-row-reverse mb-12 opacity-70 transition-all duration-500",
            activeIndex === index && "active-timeline-item opacity-100"
          )}
        >
          {/* Timeline connector */}
          <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-200 transform -translate-x-1/2">
            <div className={cn(
              "absolute inset-0.5 rounded-full bg-gray-400 transition-colors duration-500",
              activeIndex === index && "bg-[#ea384c]"
            )} />
          </div>
          
          {/* Content */}
          <div className={cn(
            "ml-10 md:ml-0 md:w-5/12 p-5 bg-white rounded-lg shadow-md transition-all duration-500 border-l-4 border-transparent",
            activeIndex === index && "border-l-[#ea384c]"
          )}>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.date}</p>
            <div className="text-base overflow-x-hidden">
              {isMobile ? (
                <div className="w-full max-w-[calc(100vw-80px)]">{item.content}</div>
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
