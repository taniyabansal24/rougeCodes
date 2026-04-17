// components/AboutPage/ProcessSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const descRefs = useRef([]);
  const imageRefs = useRef([]);
  const sectionRef = useRef(null);
  // Track if animation is in progress to prevent glitches
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef(null);

  // Hover animation with GSAP - glitch proof and smooth
  useEffect(() => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If animation is already running, queue the next action
    if (isAnimatingRef.current) {
      timeoutRef.current = setTimeout(() => {
        animateItems();
      }, 50);
      return;
    }

    animateItems();

    function animateItems() {
      isAnimatingRef.current = true;

      // Get all promises for animations
      const animations = [];

      descRefs.current.forEach((el, i) => {
        if (!el) return;

        if (activeIndex === i) {
          // EXPAND - smooth height animation
          const tl = gsap.timeline();
          tl.to(el, {
            height: "auto",
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });

          // IMAGE FLOATS IN with rotation + scale + fade
          if (imageRefs.current[i]) {
            tl.fromTo(
              imageRefs.current[i],
              {
                opacity: 0,
                scale: 0.7,
                rotate: -15,
                y: 20,
                overwrite: true,
              },
              {
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
                duration: 0.6,
                ease: "back.out(0.6)",
              },
              "-=0.3",
            );
          }
          animations.push(tl);
        } else if (activeIndex === null || activeIndex !== i) {
          // COLLAPSE - smooth closing
          const tl = gsap.timeline();

          // Only collapse if it's not the active one
          if (activeIndex !== i) {
            tl.to(el, {
              height: 0,
              duration: 0.4,
              ease: "power2.inOut",
              overwrite: true,
            });

            // IMAGE FLOATS OUT
            if (imageRefs.current[i]) {
              tl.to(
                imageRefs.current[i],
                {
                  opacity: 0,
                  scale: 0.7,
                  rotate: -15,
                  y: 20,
                  duration: 0.4,
                  ease: "power2.in",
                  overwrite: true,
                },
                0,
              );
            }
          }
          animations.push(tl);
        }
      });

      // Wait for all animations to complete
      Promise.all(
        animations.map((tl) => (tl.then ? tl.then() : Promise.resolve())),
      ).finally(() => {
        isAnimatingRef.current = false;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  const services = [
    {
      id: "01",
      title: "Discovery",
      description:
        "We begin by understanding your vision, business goals, and target audience to define the project direction. This phase includes research, requirement gathering, and identifying key challenges to ensure we build the right solution from the start.",
      image:
        "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652faddc427986bc208_Services%20Image1.jpg",
      link: "/services/web-design",
    },
    {
      id: "02",
      title: "Strategy",
      description:
        "Based on insights from discovery, we create a clear roadmap and define the overall structure of the project. This includes planning features, user flows, and technical approach to ensure smooth execution and alignment with your objectives.",
      image:
        "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652c1e25073a0538410_Services%20Image2.jpg",
      link: "/services/web-development",
    },
    {
      id: "03",
      title: "Design",
      description:
        "We craft visually appealing and user-friendly interfaces that enhance the overall experience. This step focuses on layout, typography, color systems, and interaction design to create a product that is both functional and engaging.",
      image:
        "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c6521cb67e81661aaad8_Services%20Image3.jpg",
      link: "/services/branding",
    },
    {
      id: "04",
      title: "Development",
      description:
        "We transform designs into a fully functional product using modern technologies and best coding practices. This includes building responsive interfaces, integrating APIs, and ensuring performance, scalability, and maintainability.",
      image:
        "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c652566a0be2eda8c9c1_Services%20Image4.jpg",
      link: "/services/product-design",
    },
    {
      id: "05",
      title: "Launch",
      description:
        "We thoroughly test, optimize, and deploy the product to ensure a smooth and successful launch. This phase includes performance checks, bug fixing, and final improvements so your product is ready for real users and long-term growth.",
      image:
        "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8c6521cb67e81661aaad8_Services%20Image3.jpg",
      link: "/services/branding",
    },
  ];

  // Handle mouse enter with smooth transition
  const handleMouseEnter = (index) => {
    // Only update if not already active
    if (activeIndex !== index && !isAnimatingRef.current) {
      setActiveIndex(index);
    } else if (activeIndex !== index) {
      // Queue the change if animation in progress
      timeoutRef.current = setTimeout(() => {
        setActiveIndex(index);
      }, 50);
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (!isAnimatingRef.current) {
      setActiveIndex(null);
    } else {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex(null);
      }, 50);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-16">
          <span className="badge text-accent mb-3 inline-block">
            Our Process
          </span>
          <h2 className="section-heading text-high mb-6">
            How we bring ideas to life
          </h2>
          <p className="subheading text-mid max-w-xl mx-auto">
            A clear and structured approach that helps us build high-quality,
            scalable products.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative py-8 border-b border-gray-700 cursor-pointer group"
            >
              <a className="block">
                {/* TOP ROW */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <span className="text-gray-500 text-lg font-mono">
                      {service.id}
                    </span>

                    <h3
                      className={`card-title transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-[#8ba888]"
                          : "text-[#c0c0c0] group-hover:text-[#8ba888]/70"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#8ba888] border-[#8ba888]"
                        : "border-gray-600"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        activeIndex === index ? "text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* DESCRIPTION - collapsed by default */}
                <div
                  ref={(el) => (descRefs.current[index] = el)}
                  className="overflow-hidden md:h-0"
                >
                  <p className="text-body mt-4 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* FLOATING IMAGE - hidden by default */}
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={service.image}
                  alt={service.title}
                  className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 w-64 h-44 object-cover rounded-xl shadow-2xl pointer-events-none"
                  style={{ opacity: 0 }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
