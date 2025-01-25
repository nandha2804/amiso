import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TraditionSection from './components/TraditionSection';
import SaferPlaceSection from './components/SaferPlaceSection';
import TeamSection from './components/TeamSection';
import NeedHelpSection from './components/NeedHelpSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

// Import images directly
import team10 from './assets/team10.PNG';
import bgImage from './assets/bg.JPG';

function App() {
  return (
    <div className="min-h-screen relative w-full">
      <div className="bg-black bg-opacity-20 relative">
        <Header />
        <img
          src={team10}
          alt="Background"
          className="hidden sm:block absolute top-0 left-1/2 transform  w-[480px] h-auto object-contain"
        />
        <Hero />
      </div>
      <img
        src={bgImage}
        alt="Backgroundd"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <TraditionSection />
      <SaferPlaceSection />
      <TeamSection />
      <NeedHelpSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
