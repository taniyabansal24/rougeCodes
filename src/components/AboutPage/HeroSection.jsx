// components/AboutPage/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const pillWrapperRef = useRef(null);
  const pillInnerRef = useRef(null);
  const svgRef = useRef(null);
  const svgGroupRef = useRef(null);
  const titleTrackRef = useRef(null);
  const aboutRevealRef = useRef(null);
  const usRevealRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous SVG rotation
      gsap.to(svgGroupRef.current, {
        rotation: 360,
        duration: 12,
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
        backgroundColor: "var(--accent)",
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
        xPercent: -50,
        ease: "none",
      });

      // PHASE 4 — Smooth Text Reveal
      tl.to(
        aboutRevealRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
        },
        "<",
      );

      tl.to(
        usRevealRef.current,
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
        },
        "<",
      );

      // PHASE 5 — Subtitle fade in at the end
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        ">",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="flex h-screen items-center px-6 sm:px-11 md:px-12 lg:pl-20 lg:pr-12">
        {/* TITLE TRACK */}
        <div
          ref={titleTrackRef}
          className="flex items-end gap-4 sm:gap-8 md:gap-11 lg:gap-16 whitespace-nowrap will-change-transform"
        >
          {/* ABOUT (layered for reveal) */}
          <div className="relative">
            <h1 className="hero-heading" style={{ color: "var(--accent)" }}>
              About Us
            </h1>

            <h1
              ref={aboutRevealRef}
              className="absolute top-0 left-0 hero-heading"
              style={{
                color: "var(--text-low)",
                clipPath: "inset(0 100% 0 0)",
              }}
            >
              About Us
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
                  stroke="black" // Changed from --text-high to --accent
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

          {/* WHO WE ARE (layered for reveal) */}
          <div className="relative overflow-hidden">
            <h1 className="hero-heading" style={{ color: "var(--text-low)" }}>
              Who We Are
            </h1>

            <h1
              ref={usRevealRef}
              className="absolute top-0 left-0 hero-heading"
              style={{
                color: "var(--accent)",
                clipPath: "inset(0 100% 0 0)",
              }}
            >
              Who We Are
            </h1>
          </div>
        </div>
      </div>

      {/* Subtitle that appears at the end of scroll - ENHANCED VERSION */}
      <div
        ref={subtitleRef}
        className="absolute bottom-20 right-20 text-right opacity-0"
      >
        <p className="text-body text-mid max-w-md px-4">
          We're a collective of designers, developers, and strategists dedicated
          to creating meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
