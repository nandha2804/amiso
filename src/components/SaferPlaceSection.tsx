import React from 'react';

// Import assets with URL
const icon11 = new URL('../assets/11.png', import.meta.url).href;
const icon12 = new URL('../assets/12.png', import.meta.url).href;
const icon13 = new URL('../assets/13.PNG', import.meta.url).href;
const bg2 = new URL('../assets/bg2.PNG', import.meta.url).href;
const icon4 = new URL('../assets/4.PNG', import.meta.url).href;
const icon5 = new URL('../assets/5.PNG', import.meta.url).href;
const bg3 = new URL('../assets/bg3.jpg', import.meta.url).href;

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, title, description }) => (
  <div className="bg-sky-500 p-6 rounded-lg text-white relative overflow-hidden bg-opacity-90">
    <img src={imgSrc} alt={title} className="w-20 h-20" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const SaferPlaceSection: React.FC = () => {
  const services = [
    {
      imgSrc: icon11,
      title: 'Home Cleaning',
      description: 'Comprehensive cleaning services for your home'
    },
    {
      imgSrc: icon12,
      title: 'Windows Cleaning',
      description: 'Professional window cleaning services'
    },
    {
      imgSrc: icon13,
      title: 'Office Cleaning',
      description: 'Commercial cleaning solutions for businesses'
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
     <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
       <div className="flex flex-col md:flex-row items-center">
         <div className="w-full md:w-1/2 lg:w-6/12 relative mt-[-2rem] md:mt-[-4rem] lg:mt-[-6rem]">
           <img
             src={bg2}
             alt="Cleaning Professional"
             className="w-full h-auto shadow-md relative z-10"
           />
         </div>
         <div className="w-full md:w-1/2 lg:w-8/12 p-6 md:p-8 lg:p-10 bg-white border-2 border-gray-200 shadow-lg relative mt-4 md:mt-8 lg:mt-12 z-20 md:ml-[-3rem] lg:ml-[-4rem] xl:ml-[-6rem] pr-0 md:pr-2 lg:pr-4">
            <div className="mb-8 p-10">
              <p className="text-gray-600 mb-2">MAID FOR YOU.</p>
              <h2 className="text-teal-950 text-2xl md:text-3xl font-bold mb-4">A Cleaner Place is a Safer Place.</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Washla cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <img src={icon4} alt="Professional Cleaning" className="w-16 h-16" />
              <img src={icon5} alt="Fast and Efficient" className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
              <div>
                <h1 className="font-bold text-2xl">Professional Cleaning</h1>
                <p className="text-gray-700">Expert cleaning services for all your needs</p>
              </div>
              <div>
                <h1 className="font-bold text-2xl">Fast and Efficient</h1>
                <p className="text-gray-700">Quick and reliable cleaning solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Great Service Section */}
        <div
          className="bg-no-repeat bg-cover bg-center py-16 md:py-24 lg:py-32 mt-[-3rem] md:mt-[-5rem] lg:mt-[-7rem]"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
            <p className="text-teal-950 font-bold text-center text-sm md:text-base mb-2">WHY CHOOSE US</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">Our Great Service</h2>
            <p className="text-teal-950 font-semibold text-center text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
              The members of our highly experienced team are dedicated to providing you with only the best service we can possibly provide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-16 max-w-full mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaferPlaceSection;