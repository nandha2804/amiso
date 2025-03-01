import React from 'react';
import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';

interface FeatureCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imgSrc, title, description }) => (
  <div>
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-28 h-28 mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg p-4" 
    />
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TraditionSection: React.FC = () => {
  const features = [
    {
      imgSrc: icon1,
      title: 'Professional Team',
      description: 'Our team uses a sanitizing solution to wipe down light switches doorknobs.'
    },
    {
      imgSrc: icon2,
      title: '24/7 Services',
      description: 'We encourage our customers to let us know in advance of an appointment.'
    },
    {
      imgSrc: icon3,
      title: 'Service Guarantee',
      description: 'We are telling our team members to switch out all cleaning cloths and mopheads.'
    }
  ];

  return (
    <section className="pt-12 text-center bg-white">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">WHY CHOOSE US</p>
        <h2 className="text-3xl font-bold">Tradition of Trust</h2>
        <p className="text-gray-600">
          We specialise in intelligent & effective search and believes in the power of partnership to grow business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;