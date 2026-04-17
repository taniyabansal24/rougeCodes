// components/AboutPage/StatsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats cards entrance
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Counter animation trigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => startCounting(),
        onEnterBack: () => startCounting()
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const startCounting = () => {
    const targets = [150, 30, 98, 12];
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    
    targets.forEach((target, index) => {
      let currentStep = 0;
      const increment = target / steps;
      
      const interval = setInterval(() => {
        currentStep++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(increment * currentStep), target);
          return newCounts;
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepTime);
    });
  };

  const stats = [
    { label: "Projects Completed", value: counts[0], suffix: "+" },
    { label: "Team Members", value: counts[1], suffix: "" },
    { label: "Client Satisfaction", value: counts[2], suffix: "%" },
    { label: "Years Experience", value: counts[3], suffix: "" },
  ];

  return (
    <section ref={sectionRef} className="relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={el => statsRef.current[index] = el}
              className="text-center opacity-0"
            >
              <div className="card-title text-accent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="subheading text-mid">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;