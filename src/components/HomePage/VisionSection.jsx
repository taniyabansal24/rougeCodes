import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const textLinesRef = useRef([]);

  useEffect(() => {
    // Collect all text elements to animate
    const allTextElements = [
      subtitleRef.current,
      ...textLinesRef.current,
      buttonRef.current,
    ].filter(Boolean);

    // CRITICAL FIX: Set final positions immediately on mount
    // This ensures images start at their final positions
    // Then they will animate TO these positions
    const setFinalPositions = () => {
      // Use FIXED PIXEL VALUES instead of vw/vh
      // These values are consistent across ALL devices
      const finalPositions = {
        image1: { x: -280, y: -200 },  // Top-left
        image2: { x: 280, y: -200 },   // Top-right
        image3: { x: 0, y: 280 }        // Bottom-center
      };
      
      // Apply final positions directly
      gsap.set(image1Ref.current, { x: finalPositions.image1.x, y: finalPositions.image1.y });
      gsap.set(image2Ref.current, { x: finalPositions.image2.x, y: finalPositions.image2.y });
      gsap.set(image3Ref.current, { x: finalPositions.image3.x, y: finalPositions.image3.y });
      
      return finalPositions;
    };
    
    const finalPositions = setFinalPositions();

    // Set initial text state
    gsap.set(allTextElements, {
      scale: 1.5,
      opacity: 0,
      y: 40,
    });

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ANIMATE FROM CENTER TO FINAL POSITIONS
    // Start from center (0,0)
    tl.fromTo(
      image1Ref.current,
      { x: 0, y: 0, scale: 1 },
      { x: finalPositions.image1.x, y: finalPositions.image1.y, scale: 0.8, duration: 1, ease: "power2.out" },
      0
    )
    .fromTo(
      image2Ref.current,
      { x: 0, y: 0, scale: 1 },
      { x: finalPositions.image2.x, y: finalPositions.image2.y, scale: 0.8, duration: 1, ease: "power2.out" },
      0
    )
    .fromTo(
      image3Ref.current,
      { x: 0, y: 0, scale: 1 },
      { x: finalPositions.image3.x, y: finalPositions.image3.y, scale: 0.8, duration: 1, ease: "power2.out" },
      0
    )
    // Text reveals
    .to(
      allTextElements,
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      },
      0.8
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-surface"
    >
      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="relative z-10 container mx-auto px-4 text-center mt-20 md:mt-36"
        >
          {/* Content Block */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            {/* Subtitle */}
            <div ref={subtitleRef} className="mb-8">
              <div className="badge border-accent/20">
                Let's Design Your Vision
              </div>
            </div>

            {/* Shadow Text Headings */}
            <div className="space-y-2">
              {[
                "Ready to bring",
                "your brand to life?",
                "Let's create",
                "something bold",
              ].map((text, index) => (
                <div
                  key={index}
                  ref={(el) => (textLinesRef.current[index] = el)}
                  className="relative"
                >
                  <h2 className="section-heading text-low opacity-30 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {text}
                  </h2>
                  <h2 className="section-heading text-high relative left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {text}
                  </h2>
                </div>
              ))}
            </div>

            <div className="h-16"></div>

            {/* Button */}
            <a ref={buttonRef} href="/contact" className="inline-block group">
              <div className="flex items-center space-x-4 bg-accent text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300 shadow-xl">
                <span className="btn-text relative overflow-hidden h-6">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    Get in Touch
                  </span>
                  <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                    Get in Touch
                  </span>
                </span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="relative w-5 h-5">
                    <svg
                      className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-x-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <svg
                      className="absolute top-0 left-full transition-transform duration-300 group-hover:left-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Images */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              ref={image1Ref}
              src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c9c563084ecccba9_img-06.jpg"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c9c563084ecccba9_img-06-p-500.jpg 500w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c9c563084ecccba9_img-06-p-800.jpg 800w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c9c563084ecccba9_img-06.jpg 860w"
              alt="Mockup"
              className="absolute w-64 lg:w-72 left-[20%] top-[35%] rounded-3xl shadow-2xl"
            />
            <img
              ref={image2Ref}
              src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02.jpg"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02-p-500.jpg 500w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02-p-800.jpg 800w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02.jpg 860w"
              alt="Mockup"
              className="absolute w-64 lg:w-72 right-[20%] top-[35%] rounded-3xl shadow-2xl"
            />
            <img
              ref={image3Ref}
              src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08.jpg"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08-p-500.jpg 500w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08-p-800.jpg 800w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08.jpg 860w"
              alt="Mockup"
              className="absolute w-64 lg:w-72 left-[39%] top-[33%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;