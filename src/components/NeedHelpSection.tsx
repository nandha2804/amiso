
import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

// Import assets with ?url query
const icon14 = new URL('../assets/14.PNG', import.meta.url).href;
const icon15 = new URL('../assets/15.png', import.meta.url).href;
const icon16 = new URL('../assets/16.png', import.meta.url).href;
const icon4 = new URL('../assets/4.PNG', import.meta.url).href;
const demoVideo = new URL('../assets/demo.mp4', import.meta.url).href;

interface StatCardProps {
  imgSrc: string;
  count: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ imgSrc, count, label }) => (
  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex-shrink-0">
      <img src={imgSrc} alt={label} className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16' />
    </div>
    <div className="flex-grow">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-500">{count}</div>
      <div className="text-gray-600 text-sm sm:text-base">{label}</div>
    </div>
  </div>
);

const NeedHelpSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const stats = [
    { imgSrc: icon14, count: '365', label: 'Days of Experience' },
    { imgSrc: icon15, count: '842', label: 'Happy Clients' },
    { imgSrc: icon16, count: '489', label: 'Projects Done' },
    { imgSrc: icon4, count: '1344', label: 'Hours Worked' }
  ];

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
        <div className="relative aspect-[3/2] sm:aspect-[2/1] lg:aspect-[21/9] w-full mx-auto rounded-xl overflow-hidden bg-gray-900">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onClick={handleVideoClick}
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div
              className={`absolute inset-0 ${
                isVideoPlaying ? 'bg-black opacity-40' : 'bg-sky-500 opacity-100'
              }`}
            />
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 flex flex-col items-center justify-center text-white max-w-2xl mx-auto px-4">
              <Play 
                className='bg-sky-500 p-2 sm:p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-6 lg:mb-8 cursor-pointer hover:bg-sky-600 transition-colors'
                onClick={handleVideoClick}
              />
              <p className="text-sm sm:text-base mb-2 sm:mb-3 font-medium">Cleaning your Worries Away</p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-center">
                Need Help With Cleaning?
              </h2>
              <button className="bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-sky-600 transition-colors">
                Request Call Back
              </button>
            </div>
          </div>

          {/* Stats Cards - Desktop/Tablet */}
          <div className="hidden sm:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/4 w-[92%] lg:w-[90%] max-w-[1600px] z-20">
            <div className="bg-white border-2 border-gray-100 p-4 md:p-6 rounded-xl shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
                {stats.map((stat, index) => (
                  <StatCard 
                    key={index}
                    imgSrc={stat.imgSrc}
                    count={stat.count}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Mobile */}
        <div className="sm:hidden mt-8">
          <div className="bg-white border-2 border-gray-100 p-4 rounded-xl shadow-xl">
            <div className="flex flex-col gap-4">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  imgSrc={stat.imgSrc}
                  count={stat.count}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;