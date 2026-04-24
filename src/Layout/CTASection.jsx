// components/AboutPage/CTASection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 MAIN SCROLL ANIMATION (LIKE YOUR VIDEO)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=600", // control animation length
          scrub: true,
          pin: true, // 🔥 makes section stick
          anticipatePin: 1,
        }
      });

      // 🔥 PANEL OPEN EFFECT
      tl.fromTo(
        wrapperRef.current,
        {
          scale: 0.75,
          borderRadius: "2rem",
          opacity: 1,
        },
        {
          scale: 1,
          borderRadius: "0.75rem",
          opacity: 1,
          ease: "none",
        }
      );

      // 🔥 CONTENT REVEAL
      tl.fromTo(
        contentRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        "<0.3"
      );

      // 🔥 BUTTON HOVER (SUBTLE SCALE)
      if (buttonRef.current) {
        const enter = () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        buttonRef.current.addEventListener("mouseenter", enter);
        buttonRef.current.addEventListener("mouseleave", leave);

        return () => {
          buttonRef.current?.removeEventListener("mouseenter", enter);
          buttonRef.current?.removeEventListener("mouseleave", leave);
        };
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* 🔥 OPENING PANEL */}
        <div
          ref={wrapperRef}
          className="bg-black rounded-4xl shadow-2xl will-change-transform overflow-hidden"
          style={{ transformOrigin: "center center" }}
        >
          <div
            ref={contentRef}
            className="mx-auto text-center p-8 md:p-12 lg:p-16"
          >
            <div className="flex flex-col items-center gap-8">

              {/* TEXT */}
              <div className="space-y-4">
                <h6 className="text-white/90 text-lg md:text-xl font-semibold tracking-wide">
                  Have a project in mind? Just let us know!
                </h6>
                <h2 className="text-white hero-heading">
                  Let's Start Talk
                </h2>
              </div>

              {/* BUTTON */}
              <a
                ref={buttonRef}
                href="/contact"
                className="inline-block group mt-6 md:mt-10"
              >
                <div className="flex items-center space-x-4 bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl transition-all duration-300">

                  <span className="relative overflow-hidden h-6">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Get in Touch
                    </span>
                    <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                      Get in Touch
                    </span>
                  </span>

                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="relative w-5 h-5">
                      <svg
                        className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-x-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                      </svg>
                      <svg
                        className="absolute top-0 left-full transition-transform duration-300 group-hover:left-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;