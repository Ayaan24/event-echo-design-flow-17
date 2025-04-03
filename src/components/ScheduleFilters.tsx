
import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

const ScheduleFilters: React.FC = () => {
  const [location, setLocation] = useState("Seoul");
  const [instructor, setInstructor] = useState("All Instructors");
  const [classType, setClassType] = useState("All Class Types");
  
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showInstructorDropdown, setShowInstructorDropdown] = useState(false);
  const [showClassTypeDropdown, setShowClassTypeDropdown] = useState(false);

  return (
    <section className="py-6 border-t border-b border-studio-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            {/* Location Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-white"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <span>{location}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showLocationDropdown && (
                <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md bg-studio-darkgray shadow-lg animate-fade-in">
                  <div className="p-2">
                    {["Seoul", "Tokyo", "Beijing", "Singapore", "Bangkok"].map((item) => (
                      <button
                        key={item}
                        className="w-full rounded px-4 py-2 text-left hover:bg-studio-gray"
                        onClick={() => {
                          setLocation(item);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Instructor Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-white"
                onClick={() => setShowInstructorDropdown(!showInstructorDropdown)}
              >
                <span>{instructor}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showInstructorDropdown && (
                <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md bg-studio-darkgray shadow-lg animate-fade-in">
                  <div className="p-2">
                    {["All Instructors", "John Smith", "Mina Park", "David Kim", "Sarah Chen"].map((item) => (
                      <button
                        key={item}
                        className="w-full rounded px-4 py-2 text-left hover:bg-studio-gray"
                        onClick={() => {
                          setInstructor(item);
                          setShowInstructorDropdown(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Class Type Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-white"
                onClick={() => setShowClassTypeDropdown(!showClassTypeDropdown)}
              >
                <span>{classType}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showClassTypeDropdown && (
                <div className="absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md bg-studio-darkgray shadow-lg animate-fade-in">
                  <div className="p-2">
                    {["All Class Types", "Dance", "Vocal", "Instruments", "Performance"].map((item) => (
                      <button
                        key={item}
                        className="w-full rounded px-4 py-2 text-left hover:bg-studio-gray"
                        onClick={() => {
                          setClassType(item);
                          setShowClassTypeDropdown(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between space-x-4 md:justify-end">
            <button className="border border-white p-2 rounded hover:bg-studio-darkgray transition-all duration-300">
              CLEAR ALL
            </button>
            <div className="flex space-x-4">
              <button className="text-white">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button className="text-white">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleFilters;
