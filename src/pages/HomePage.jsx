import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import VisionSection from "../components/HomePage/VisionSection";
import Project from "../components/HomePage/Project";
import Process from "../components/HomePage/Process";
import Services from "../components/HomePage/Services";
import WhyUs from "../components/HomePage/WhyUs";
import CallToAction from "../Layout/CallToAction";

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <VisionSection />

      <div className="pb-24">
        <Project />
      </div>
      <Process />
      <Services />
      <WhyUs />
      <CallToAction />
    </main>
  );
};

export default HomePage;
