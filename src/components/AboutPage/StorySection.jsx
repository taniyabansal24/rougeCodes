// components/AboutPage/StorySection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const buttonTextAbsoluteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          },
        );
      }

      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Feature cards animation
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // Button text hover animation
      if (
        buttonTextRef.current &&
        buttonTextAbsoluteRef.current &&
        buttonRef.current
      ) {
        const handleMouseEnter = () => {
          gsap.to(buttonTextRef.current, {
            y: "-100%",
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(buttonTextAbsoluteRef.current, {
            y: "0%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(buttonTextRef.current, {
            y: "0%",
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(buttonTextAbsoluteRef.current, {
            y: "250%",
            duration: 0.3,
            ease: "power2.inOut",
          });
        };

        buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          if (buttonRef.current) {
            buttonRef.current.removeEventListener(
              "mouseenter",
              handleMouseEnter,
            );
            buttonRef.current.removeEventListener(
              "mouseleave",
              handleMouseLeave,
            );
          }
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Innovate to Lead",
      description:
        "Foster creativity and embrace innovation to stay ahead of the competition.",
    },
    {
      title: "Optimize for Growth",
      description:
        "Streamline processes and resources to maximize efficiency and profitability.",
    },
    {
      title: "Engage with Purpose",
      description: "Build meaningful relationships with customers through",
    },
    {
      title: "Scale with Strategy",
      description:
        "Expand your business by implementing structured, scalable plans",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className="flex flex-col lg:flex-row gap-12 items-center"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl pt-2">
              <img
                ref={imageRef}
                src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68aa0d4927a7a2c37c2d4733_Why%20Chooses%20Us%20Image.png"
                loading="lazy"
                alt="Choose Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2">
            {/* Header */}
            <div className="mb-8">
              <span className="badge mb-3 inline-block">About Us</span>
              <h2 className="section-heading mb-4">
                Your Success, Our Priority.
              </h2>
              <p className="text-body">
                We're dedicated to helping you achieve your goals with a simple,
                user-friendly experience. We believe our commitment to your
                success sets us apart.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="pt-4 border-t border-[#4948524d] transition-all duration-300"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <h3 className="subheading font-semibold text-high mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body text-mid">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="">
              <button
                className="group relative px-8 py-4 rounded-lg btn-text transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-1 bg-accent text-white"
                style={{
                  boxShadow: "0 10px 25px -5px rgba(139, 168, 136, 0.4)",
                }}
              >
                <span className="absolute inset-0 w-full h-full transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative flex items-center justify-center gap-2">
                  Start Project
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
