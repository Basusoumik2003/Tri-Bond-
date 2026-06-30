import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#faf8ff] text-[#131b2e] flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
