// components/AboutPage/ValuesSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            boxShadow: "0 20px 40px -10px rgba(139,168,136,0.3)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: "🌟",
      title: "Excellence",
      description: "We strive for excellence in every detail, pushing creative boundaries while maintaining the highest quality standards."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Great work comes from great partnerships. We work closely with our clients, treating their vision as our own."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace new technologies and approaches, constantly evolving to deliver cutting-edge solutions."
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We believe in creating digital products that are not only beautiful but also sustainable and responsible."
    }
  ];

  return (
    <section ref={sectionRef} className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-subtitle-accent text-accent mb-3 inline-block">
            Our Values
          </span>
          <h2 className="section-heading text-high mb-6">
            What drives us forward
          </h2>
          <p className="text-body text-mid">
            Our core values shape our culture, guide our decisions, 
            and define who we are as a team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-surface p-8 rounded-2xl border border-border hover-glow transition-all duration-300 opacity-0 cursor-pointer"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="service-title text-high mb-3">{value.title}</h3>
              <p className="text-body text-mid">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
  );
};

export default ValuesSection;