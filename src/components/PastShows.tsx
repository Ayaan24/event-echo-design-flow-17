
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface PastShow {
  id: number;
  title: string;
  venue: string;
  description: string;
  image: string;
  videoThumbnail?: string;
  duration?: string;
}

const pastShowsData: PastShow[] = [
  {
    id: 1,
    title: "Imagine Dragons Live At Etihad Arena",
    venue: "Etihad Arena",
    description: "Etihad Arena promises to be a monumental concert ...",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    duration: "7:23 / 12:45"
  },
  {
    id: 2,
    title: "Wireless Festival Middle East After Music",
    venue: "Dubai Media City Amphitheatre",
    description: "Music event promises to be an exhilarating continuation of the vibrant energy that defines the Wireless Festival. Middle East, this after-party...",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Backstreet Boys Live At Etihad Arena",
    venue: "Etihad Arena",
    description: "Etihad Arena promises to be a monumental concert ...",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
  },
];

const PastShows: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<PastShow | null>(pastShowsData[0]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">OUR PAST SHOWS</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Featured video player */}
          <div className="mb-8 md:col-span-7 md:mb-0">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={selectedVideo?.videoThumbnail || selectedVideo?.image} 
                alt={selectedVideo?.title} 
                className="h-auto w-full object-cover"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-studio-red text-white transition-transform hover:scale-110">
                  <Play className="h-8 w-8" />
                </button>
              </div>
              
              {selectedVideo?.duration && (
                <div className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-1 text-sm text-white">
                  {selectedVideo.duration}
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-white">
                    <img 
                      src="https://placekitten.com/100/100" 
                      alt="Live Nation Middle East" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Live Nation Middle East</h4>
                    <p className="text-sm text-gray-300">375k subscribers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{selectedVideo?.title || "Wireless Festival Middle East After Music."}</h3>
              <p className="mt-2 text-gray-300">
                {selectedVideo?.description || "Music event promises to be an exhilarating continuation of the vibrant energy that defines the Wireless Festival. Middle East, this after-party..."}
                <a href="#" className="ml-2 text-studio-red hover:underline">Read More</a>
              </p>
            </div>
          </div>
          
          {/* Video thumbnails */}
          <div className="md:col-span-5">
            <div className="space-y-6">
              {pastShowsData.slice(0, 3).map((show) => (
                <div 
                  key={show.id}
                  className={`group flex cursor-pointer overflow-hidden rounded-lg hover:bg-studio-darkgray transition-all ${selectedVideo?.id === show.id ? 'border border-studio-red bg-studio-darkgray' : ''}`}
                  onClick={() => setSelectedVideo(show)}
                >
                  <div className="relative h-24 w-36 flex-shrink-0">
                    <img 
                      src={show.image} 
                      alt={show.title} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-studio-red text-white opacity-80 transition-all group-hover:opacity-100">
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-3">
                    <h4 className="text-lg font-semibold group-hover:text-studio-red">{show.title}</h4>
                    <p className="text-sm text-gray-300">{show.description.substring(0, 60)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastShows;
