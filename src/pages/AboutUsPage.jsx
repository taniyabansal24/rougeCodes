// pages/AboutUsPage.jsx
import React from "react";
import HeroSection from "../components/AboutPage/HeroSection";
import StorySection from "../components/AboutPage/StorySection";
import ValuesSection from "../components/AboutPage/ValuesSection";
import TeamSection from "../components/AboutPage/TeamSection";
import StatsSection from "../components/AboutPage/StatsSection";
import ProcessSection from "../components/AboutPage/ProcessSection";
import CallToAction from "../Layout/CallToAction";
import CTASection from "../Layout/CTASection";

const AboutUsPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <StorySection />
      </div>
      <div className="section-sm">
        <StatsSection />
      </div>
      <div className="section bg-page">
        <ProcessSection />
      </div>
      <div className=" bg-surface">
        <TeamSection />
      </div>
      <div className="">
        {/* <CallToAction /> */}
        <CTASection/>
      </div>
    </div>
  );
};

export default AboutUsPage;