// components/AboutPage/StorySection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    icon: "compass",
    title: "Understand",
    text: "Every engagement starts with the problem, the people and the business behind it.",
  },
  {
    icon: "pen",
    title: "Shape",
    text: "We design the product and its architecture together, so ambition and feasibility stay aligned.",
  },
  {
    icon: "layers",
    title: "Engineer",
    text: "We build across firmware, cloud, web and mobile — production-ready, not just demo-ready.",
  },
];

const renderIcon = (name) => {
  switch (name) {
    case "compass":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "pen":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14.5 5.5 18.5 9.5" />
          <path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 0l.5.5a2.1 2.1 0 0 1 0 3L8.5 19 4 20Z" />
        </svg>
      );
    case "layers":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
        </svg>
      );
    default:
      return null;
  }
};

const StorySection = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const pillarsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left column (eyebrow & heading)
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate right column paragraphs
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate pillars grid
      if (pillarsRef.current.length > 0) {
        gsap.fromTo(
          pillarsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillarsRef.current[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-surface"
      aria-labelledby="story-title"
    >
      <Container size="xl">
        {/* Story — editorial split */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-start pt-28">
          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#5b636b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3f9526] shadow-[0_0_0_3px_rgba(63,149,38,0.18)]" />
              <span>Our story</span>
            </div>
            <h2
              id="story-title"
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-['Phudu',sans-serif] text-[#15191c] leading-[1.1]"
            >
              Industrial-grade engineering, with a product mindset.
            </h2>
          </div>

          {/* Right Column */}
          <div
            ref={rightColRef}
            className="space-y-6 text-[1.075rem] leading-[1.7] text-[#4a5157] lg:col-span-6 lg:col-start-7"
          >
            <p>
              RougeCodes exists to bridge the gap between abstract ideas and
              production-ready reality. Too many good ideas stall between a
              pitch deck and a working product — lost in handovers between
              designers, software engineers and hardware specialists.
            </p>
            <p>
              We bring those disciplines together. Web and mobile applications,
              IoT products and embedded systems are planned and built by one team,
              so the experience on the screen and the engineering underneath are
              designed as a single system.
            </p>
            <p className="font-medium text-[#15191c]">
              Your success is our priority: we’re dedicated to helping you reach
              your goals with a simple, collaborative experience from first
              conversation to launch — and beyond.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 lg:mt-24">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <li
                key={p.title}
                ref={(el) => (pillarsRef.current[i] = el)}
                className="bg-white p-8 transition-colors duration-200 hover:bg-[#fafaf7]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#f0f6ec] text-[#2c6e1a]">
                    {renderIcon(p.icon)}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8a9299]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-xl sm:text-2xl font-semibold tracking-tight text-[#15191c]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-[#5b636b]">
                  {p.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;
