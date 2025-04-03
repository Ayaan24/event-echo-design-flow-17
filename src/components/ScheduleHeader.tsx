
import React from 'react';
import { Grid, LayoutGrid } from 'lucide-react';

const ScheduleHeader: React.FC = () => {
  return (
    <section id="schedule" className="pt-32 pb-6">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-[12rem] font-bold leading-none tracking-tighter text-white animate-fade-in md:text-[16rem]">
          SCHEDULE
        </h1>
        
        <div className="mb-8 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <h2 className="text-3xl font-semibold">Schedule</h2>
          <div className="flex space-x-2">
            <button className="rounded-full p-2 bg-studio-darkgray transition-all hover:bg-studio-gray">
              <Grid className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2 bg-studio-darkgray transition-all hover:bg-studio-gray">
              <LayoutGrid className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleHeader;
