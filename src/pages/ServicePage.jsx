import React from "react";
import HeroSection from "../components/ServicePage/HeroSection";
import CallToAction from "../Layout/CallToAction";
import ServicesCard from "../components/ServicePage/ServicesCard";
import FAQ from "../Layout/FAQ";
import Career from "../components/ServicePage/Carrer";
import CTASection from "../Layout/CTASection";

const ServicePage = () => {
  return (
    <div id="services">
      <HeroSection />
      <div className="section">
        <ServicesCard />
      </div>
      <div className="section">
        <FAQ />
      </div>
      <div className="pt-20 md:pt-24" id="careers">
        <Career />
      </div>
      <div className="">
        <CTASection />
      </div>
    </div>
  );
};

export default ServicePage;
