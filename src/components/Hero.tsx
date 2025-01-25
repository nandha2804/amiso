import React from 'react';

// Import assets with URL
const icon8 = new URL('../assets/8.png', import.meta.url).href;
const icon9 = new URL('../assets/9.PNG', import.meta.url).href;
const icon10 = new URL('../assets/10.PNG', import.meta.url).href;

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, title, description }) => (
  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
    <div className="mb-4 sm:mb-6">
      <img src={imgSrc} alt={title} className="w-28 h-28 sm:w-40 sm:h-40 mx-auto object-contain" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

const Hero: React.FC = () => {
  const services = [
    {
      imgSrc: icon8,
      title: 'Professional Cleaning',
      description: 'Expert cleaning services for your home or office',
    },
    {
      imgSrc: icon9,
      title: 'Fast and Efficient',
      description: 'Quick and thorough cleaning solutions',
    },
    {
      imgSrc: icon10,
      title: 'Service Guarantee',
      description: '100% satisfaction guaranteed',
    },
  ];

  return (
    <div className="relative z-10 overflow-hidden">
      <header className="text-white relative mb-12 w-full py-8 sm:py-16">
        <div className="container mx-auto px-6 sm:px-16 text-center sm:text-left">
          <div className="max-w-2xl sm:max-w-5xl relative z-10">
            <p className="font-bold text-sm sm:text-lg mb-2 sm:mb-4">RENEW YOUR LOOK</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-16 leading-tight">
              A TRADITION OF <br /> QUALITY CLEANING
            </h1>
            <button className="bg-white text-sky-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-sky-50 transition-colors flex items-center justify-center text-sm sm:text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <header id="mobile-menu" className="hidden sm:hidden text-white relative mb-12 w-full py-8 bg-sky-500 sm:py-16">
        <div className="container mx-auto px-6 sm:px-16 text-center sm:text-left">
          <div className="max-w-2xl sm:max-w-5xl relative z-10">
            <p className="font-bold text-sm sm:text-lg mb-2 sm:mb-4">RENEW YOUR LOOK</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-16 leading-tight">
              A TRADITION OF <br /> QUALITY CLEANING
            </h1>
            <button className="bg-white text-sky-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-sky-50 transition-colors flex items-center justify-center text-sm sm:text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <section className="bg-sky-500 relative z-10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="transform -translate-y-6 sm:-translate-y-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-justify grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">A Clean House is a Happy Place!</h2>
              <p className="text-white text-sm sm:text-base">
                Washla has met the demands of a growing world.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-white leading-relaxed text-sm sm:text-base first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                Washla customers have a tremendous opportunity to answer the call of logistic needs across the globe. Has 26 affiliated state soybean associations representing 30 soybean-producing states.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-white leading-relaxed text-sm sm:text-base">
                World's leading non-asset-based supply chain management companies, we design and implement industry-leading. We specialize in intelligent & effective search and believe in the power of partnership to grow business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
