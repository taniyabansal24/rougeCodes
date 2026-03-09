import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import VisionSection from "../components/HomePage/VisionSection";
import Project from "../components/HomePage/Project";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <VisionSection />
      </div>
      <div className="section">
        <Project />
      </div>
    </div>
  );
};

export default HomePage;
