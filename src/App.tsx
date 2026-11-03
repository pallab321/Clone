import React from 'react';
import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MakingOfHome from './components/MakingOfHome';
import AboutVision from './components/AboutVision';
import JourneyProcess from './components/JourneyProcess';
import ProjectShowcase from './components/ProjectShowcase';
import CommercialSection from './components/CommercialSection';
import Recognition from './components/Recognition';
import Testimonials from './components/Testimonials';
import JournalSection from './components/JournalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08101e] text-[#f4eee2] selection:bg-[#eae0d5] selection:text-[#08101e] relative">
      {/* Global Interactive WebGL2 Fluid Simulation (Pure Liquid Gold & Champagne Brass) */}
      <SplashCursor
        rainbow={false}
        colors={['#C5A059', '#D4AF37', '#E5C88D', '#9A7832']}
        colorSpeed={0.4}
        intensity={0.55}
        size={0.65}
        force={0.8}
        swirl={3}
        trail={0.75}
        glow={0.18}
        clickSplash={true}
        theme="dark"
        zIndex={50}
      />

      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Hero Section with Video Reel & Captions */}
      <Hero />

      {/* 3D Blueprint Scroll: The Making of a Home */}
      <MakingOfHome />

      {/* About & Brand Philosophy */}
      <AboutVision />

      {/* 8-Stage Homeowner Journey */}
      <JourneyProcess />

      {/* Featured Projects: CP Greens, EUROPA, CP Plaza */}
      <ProjectShowcase />

      {/* Commercial & Retail Spaces */}
      <CommercialSection />

      {/* Accolades & IGBC Gold Milestone */}
      <Recognition />

      {/* Resident Stories */}
      <Testimonials />

      {/* Real Estate Journal & Insights */}
      <JournalSection />

      {/* Site Visit Banner & Start a Conversation Form */}
      <ContactSection />

      {/* Exact 1:1 Footer */}
      <Footer />
    </div>
  );
};

export default App;
