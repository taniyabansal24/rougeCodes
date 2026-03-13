// components/AboutPage/ProcessSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate connecting line
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          }
        }
      );

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(step,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
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

  const steps = [
    { number: "01", title: "Discovery", description: "We dive deep into understanding your vision, goals, and audience." },
    { number: "02", title: "Strategy", description: "We develop a comprehensive plan to bring your ideas to life." },
    { number: "03", title: "Design", description: "We craft beautiful, functional designs that tell your story." },
    { number: "04", title: "Development", description: "We build robust, scalable solutions using cutting-edge technology." },
    { number: "05", title: "Launch", description: "We carefully deploy and optimize your product for success." },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-subtitle-accent text-accent mb-3 inline-block">
            Our Process
          </span>
          <h2 className="section-heading text-high mb-6">
            How we bring ideas to life
          </h2>
          <p className="text-body text-mid">
            A collaborative approach that ensures every project exceeds expectations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div 
            ref={lineRef}
            className="absolute top-12 left-0 w-full h-px bg-accent/20 origin-left"
          />

          {/* Steps */}
          <div className="relative flex flex-wrap justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className="w-full sm:w-[calc(20%-8px)] text-center opacity-0"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-surface border-2 border-accent flex items-center justify-center">
                    <span className="text-accent font-medium">{step.number}</span>
                  </div>
                </div>
                <h3 className="card-title text-high mb-2">{step.title}</h3>
                <p className="text-body-sm text-mid">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;