import React from 'react';
const ScheduleHeader: React.FC = () => {
  return <section id="schedule" className="pt-32 pb-6">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-[8rem] font-bold leading-none tracking-tighter text-white animate-fade-in md:text-[12rem] px-px mx-0">WORKSHOP</h1>
        
        <div className="relative w-full overflow-hidden bg-white py-2 mb-16">
          <div className="marquee-container flex w-fit animate-marquee bg-red-600">
            {Array(20).fill("WORKSHOP").map((text, index) => <span key={index} className="mx-4 text-xl font-bold uppercase tracking-widest whitespace-nowrap text-slate-50">
                {text}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ScheduleHeader;