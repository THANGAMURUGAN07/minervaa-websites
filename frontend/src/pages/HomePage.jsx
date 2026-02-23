import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';

export const HomePage = () => {
  return (
    <div className="bg-gradient-rainbow min-h-screen flex flex-col items-center justify-start">
      <HeroSection />
      <div className="w-full max-w-4xl mx-auto p-6 mt-8 rounded-3xl bg-white/80 shadow-xl">
        <AboutSection />
      </div>
    </div>
  );
};
