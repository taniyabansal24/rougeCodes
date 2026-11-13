import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({
  bgImage = "/i 1.png",
  variantNumber = 1,
  variantName = "Prismatic Wave",
  bgOpacity = 1,
}) => {
  const sectionRef = useRef(null);
  const pillWrapperRef = useRef(null);
  const pillInnerRef = useRef(null);
  const svgRef = useRef(null);
  const svgGroupRef = useRef(null);
  const titleTrackRef = useRef(null);
  const designRevealRef = useRef(null);
  const thatRevealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous SVG rotation
      gsap.to(svgGroupRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // PHASE 1 — Shrink to SVG Fit
      tl.to(pillWrapperRef.current, {
        width: "9vw",
        ease: "none",
      });

      tl.to(
        svgRef.current,
        {
          rotation: -360,
          ease: "none",
        },
        "<",
      );

      // PHASE 2 — Switch AFTER shrink
      tl.to(pillInnerRef.current, {
        backgroundColor: "var(--darkAccent)",
        duration: 0.15,
      });

      tl.to(
        svgGroupRef.current,
        {
          stroke: "var(--surface)",
          duration: 0.15,
        },
        "<",
      );

      // PHASE 3 — Horizontal Scroll
      tl.to(titleTrackRef.current, {
        xPercent: -35,
        ease: "none",
      });

      // PHASE 4 — Smooth Text Reveal
      tl.to(
        designRevealRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
        },
        "<",
      );

      tl.to(
        thatRevealRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
        },
        "<",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={`hero-variant-${variantNumber}`}
      className="relative h-screen overflow-hidden bg-page"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt={`Hero Background Variant ${variantNumber}`}
          className="h-full w-full object-cover object-center"
          style={{ opacity: bgOpacity }}
          loading="eager"
        />
      </div>

      {/* Variant Indicator Pill for Showcase */}
      <div className="absolute top-24 left-6 sm:left-11 md:left-12 lg:left-20 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-wider text-[#1a1a1a] shadow-xs backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#357f20]" />
          Variant 0{variantNumber} • {variantName}
        </span>
      </div>

      <div className="relative z-10 flex h-screen items-center px-6 sm:px-11 md:px-12 lg:pl-20 lg:pr-12">
        {/* TITLE TRACK */}
        <div
          ref={titleTrackRef}
          className="flex items-end gap-4 sm:gap-8 md:gap-11 lg:gap-16 whitespace-nowrap will-change-transform"
        >
          {/* DESIGN (layered for reveal) */}
          <div className="relative">
            <h1 className="hero-heading text-darkAccent">Design</h1>

            <h1
              ref={designRevealRef}
              className="absolute top-0 left-0 hero-heading text-low"
              style={{
                clipPath: "inset(0 100% 0 0)",
              }}
            >
              Design
            </h1>
          </div>

          {/* PILL WRAPPER */}
          <div
            ref={pillWrapperRef}
            style={{ width: "27.9227vw" }}
            className="overflow-hidden will-change-[width] mb-2 sm:mb-4 lg:mb-5.25 h-[9vw]"
          >
            <div
              ref={pillInnerRef}
              className="rounded-[10vw] p-[1vw] flex items-center justify-end bg-[#e7e7e7]"
            >
              <svg
                ref={svgRef}
                viewBox="0 0 100 100"
                className="w-[7vw] h-[7vw]"
              >
                <g
                  ref={svgGroupRef}
                  stroke="black"
                  strokeWidth="10"
                  strokeLinecap="round"
                >
                  <line x1="50" y1="0" x2="50" y2="100" />
                  <line x1="0" y1="50" x2="100" y2="50" />
                  <line x1="15" y1="15" x2="85" y2="85" />
                  <line x1="85" y1="15" x2="15" y2="85" />
                </g>
              </svg>
            </div>
          </div>

          {/* THAT MATTER (layered for reveal) */}
          <div className="relative overflow-hidden">
            <h1 className="hero-heading text-low">
              that matters
            </h1>

            <h1
              ref={thatRevealRef}
              className="absolute top-0 left-0 hero-heading text-darkAccent"
              style={{
                clipPath: "inset(0 100% 0 0)",
              }}
            >
              that matters
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection2 = (props) => (
  <HeroSection
    bgImage="/i 2.png"
    variantNumber={2}
    variantName="Frosted Ribbed Glass"
    {...props}
  />
);

export const HeroSection3 = (props) => (
  <HeroSection
    bgImage="/i 3.png"
    variantNumber={3}
    variantName="Soft Liquid Ripple"
    bgOpacity={0.23}
    {...props}
  />
);

export const HeroSection4 = (props) => (
  <HeroSection
    bgImage="/i 4.png"
    variantNumber={4}
    variantName="Sage Ribbon Wave"
    bgOpacity={0.18}
    {...props}
  />
);

export const HeroSection5 = (props) => (
  <HeroSection
    bgImage="/i 5.png"
    variantNumber={5}
    variantName="Geometric Glass Planes"
    bgOpacity={0.18}
    {...props}
  />
);

export const HeroSection6 = (props) => (
  <HeroSection
    bgImage="/i 6.png"
    variantNumber={6}
    variantName="Architectural Grid Blocks"
    bgOpacity={0.35}
    {...props}
  />
);

export default HeroSection;
