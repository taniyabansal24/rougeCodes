import React from "react";
import HeroSection, {
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
  HeroSection6,
} from "../components/HomePage/HeroSection";
import VisionSection from "../components/HomePage/VisionSection";
import Project from "../components/HomePage/Project";
import Process from "../components/HomePage/Process";
import Services from "../components/HomePage/Services";
import WhyUs from "../components/HomePage/WhyUs";
import CallToAction from "../Layout/CallToAction";

const HomePage = () => {
  return (
    <main className="w-full relative">
      {/* 6 Hero Section Variants with Images i 1.png to i 6.png */}
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />

      {/* Floating Variant Quick-Jump Navigator for Presentation */}
      <aside
        className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 p-1.5 shadow-xl backdrop-blur-md"
        aria-label="Hero Variant Selector"
      >
        <span className="pl-2 pr-1 font-mono text-[0.7rem] uppercase tracking-wider text-[#666666] font-medium hidden sm:inline">
          Hero Variants:
        </span>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => {
              const el = document.getElementById(`hero-variant-${num}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            type="button"
            className="grid h-7 w-7 place-items-center rounded-full text-xs font-semibold text-[#15191c] hover:bg-[#357f20] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[#357f20]"
            title={`Jump to Variant ${num}`}
          >
            {num}
          </button>
        ))}
      </aside>

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
