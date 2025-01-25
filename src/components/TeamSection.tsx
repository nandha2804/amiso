import React, { useState, useEffect } from 'react';
import { TeamMember } from '../types';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.PNG';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.PNG';
import team5 from '../assets/team5.PNG';
import team6 from '../assets/team6.PNG';
import team7 from '../assets/team7.PNG';
import team8 from '../assets/team8.PNG';

const TeamSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamImages: TeamMember[][] = [
    [
      { src: team1, name: 'Monica Gordon', role: 'House Cleaning' },
      { src: team2, name: 'Laurie James', role: 'Cleaner' },
      { src: team3, name: 'Sara Ryan', role: 'House Cleaner' },
    ],
    [
      { src: team4, name: 'Smitha George', role: 'Garden Cleaning' },
      { src: team5, name: 'Julie John', role: 'Pet Cleaner' },
      { src: team6, name: 'Victoria', role: 'Store Room Maintainer' },
    ],
    [
      { src: team7, name: 'Julie', role: 'Home Maker' },
      { src: team8, name: 'Sara Ryan', role: 'Cleaner' },
      { src: team5, name: 'Jaguilena', role: 'House Keeper' },
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === 0 ? 1 : prevIndex === 1 ? 2 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
        <p className="text-gray-500 font-semibold text-center">MEET OUR</p>
        <h2 className="text-4xl text-teal-950 font-bold text-center mb-2">Our Team</h2>
        <p className="text-gray-500 text-center text-lg mb-12">
          The members of our highly experienced team are dedicated to providing you with only the best service we can possibly provide.
        </p>

        {/* Image Marquee Section */}
        <div className="overflow-hidden relative mb-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
            {teamImages[activeIndex].map((member, index) => (
              <div key={index} className="text-center relative">
                <div className="aspect-w-4 aspect-h-5 mb-12 sm:mb-16">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg mx-auto relative z-10 border border-gray-200"
                  />
                </div>
                <div className="bg-white shadow-xl p-2 sm:p-4 lg:p-5 rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-16 sm:-translate-y-24 w-[90%] z-20">
                  <h3 className="text-sm sm:text-base lg:text-xl font-semibold truncate">{member.name}</h3>
                  <p className="text-sky-500 text-xs sm:text-sm truncate">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-teal-500' : 'bg-gray-400'
              }`}
              aria-label={`View team group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;