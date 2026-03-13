// components/AboutPage/StorySection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const yearRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1
          }
        }
      );

      // Image parallax
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Year markers animation
      yearRefs.current.forEach((ref, index) => {
        gsap.fromTo(ref,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const years = [
    { year: "2018", text: "Founded in a small studio in Brooklyn" },
    { year: "2020", text: "Expanded to a team of 10 creatives" },
    { year: "2022", text: "Opened second office in London" },
    { year: "2024", text: "Now a global team of 30+ experts" },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div ref={textRef} className="opacity-0">
            <span className="text-subtitle-accent text-accent mb-3 inline-block">
              Our Story
            </span>
            <h2 className="section-heading text-high mb-8">
              Crafting digital experiences since 2018
            </h2>
            <p className="text-body text-mid mb-6">
              What started as a passion project between two friends has grown into 
              a full-service creative agency. We believe in the power of design to 
              transform businesses and create meaningful connections.
            </p>
            <p className="text-body text-mid mb-10">
              Our journey has been defined by curiosity, collaboration, and a 
              relentless pursuit of excellence. Every project is an opportunity 
              to push boundaries and create something truly exceptional.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {years.map((item, index) => (
                <div
                  key={index}
                  ref={el => yearRefs.current[index] = el}
                  className="flex items-start gap-6 opacity-0"
                >
                  <div className="text-3xl font-light text-accent min-w-[80px]">
                    {item.year}
                  </div>
                  <div className="flex-1 border-b border-border pb-4">
                    <p className="text-body text-mid">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200"
              alt="Our team collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Floating quote */}
            <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-body text-high italic">
                "Design is not just what it looks like and feels like. 
                Design is how it works."
              </p>
              <p className="text-subtitle text-mid mt-2">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;