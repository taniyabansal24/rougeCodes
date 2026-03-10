import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import VisionSection from "../components/HomePage/VisionSection";
import Project from "../components/HomePage/Project";
import Services from "../components/HomePage/Services";
import CallToAction from "../Layout/CallToAction";
import WhyUs from "../components/HomePage/WhyUs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <VisionSection />
      </div>
         <div className="">
        <WhyUs/>
      </div>
      <div className="">
        <Project />
      </div>
      <div className="section">
        <Services/>
      </div>
      <div className="">
        <CallToAction/>
      </div>
    </div>
  );
};

export default HomePage;
