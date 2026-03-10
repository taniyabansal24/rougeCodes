import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";

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
    ].filter(Boolean); // Filter out any null/undefined refs

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
    // Initial setup - images centered
    gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
      opacity: 1,
      scale: 1,
    });

    // Set initial text state (hidden/zoomed) for ALL text elements
    gsap.set(allTextElements, {
      scale: 1.5,
      opacity: 0,
      y: 40,
    });

    // PHASE 1: Images move to FINAL CORNER POSITIONS with viewport-relative distances
    tl.to(
      image1Ref.current,
      {
        x: "-40vw", // Move far left using viewport width
        y: "-30vh", // Move far up using viewport height
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
      },
      0,
    )
      .to(
        image2Ref.current,
        {
          x: "40vw", // Move far right using viewport width
          y: "-30vh", // Move far up using viewport height
          scale: 0.8,
          duration: 1,
          ease: "power2.out",
        },
        0,
      )
      .to(
        image3Ref.current,
        {
          x: 0, // Stay centered horizontally
          y: "35vh", // Move far down using viewport height
          scale: 0.8,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

    // PHASE 2: ALL text reveals (staggered) - including subtitle and button
    tl.to(
      allTextElements,
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      },
      0.8,
    ); // Start when images are almost done moving

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
      <Container>
        <div
          ref={containerRef}
          className="relative z-10 container mx-auto px-4 text-center mt-20 md:mt-36"
        >
          {/* Content Block */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            {/* Subtitle - Using consistent text-subtitle-accent class */}
            <div ref={subtitleRef} className="mb-8">
              <div className="text-subtitle-accent text-accent border-accent/20">
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
                  {/* Shadow text */}
                  <h2 className=" cta-heading text-low opacity-30 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {text}
                  </h2>
                  {/* Main text */}
                  <h2 className=" cta-heading text-high relative left-1/2 -translate-x-1/2 whitespace-nowrap">
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
              className="absolute w-48 lg:w-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-3xl shadow-2xl"
            />
            <img
              ref={image2Ref}
              src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02.jpg"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02-p-500.jpg 500w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02-p-800.jpg 800w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20882f18113efc6658_img-02.jpg 860w"
              alt="Mockup"
              className="absolute w-56 lg:w-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-3xl shadow-2xl"
            />
            <img
              ref={image3Ref}
              src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08.jpg"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08-p-500.jpg 500w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08-p-800.jpg 800w, https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682b9d20c48e40bd24eb715c_img-08.jpg 860w"
              alt="Mockup"
              className="absolute w-64 lg:w-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionSection;
