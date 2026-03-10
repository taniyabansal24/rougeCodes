import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
// import animationData from './assets/animation.json';

gsap.registerPlugin(ScrollTrigger);

// Card Components with updated styling
const TextCard = ({ children, className = "" }) => (
  <div
    className={`bg-surface p-8 rounded-2xl shadow-lg hover-lift ${className}`}
  >
    <p className="text-body text-mid">{children}</p>
  </div>
);

const ProgressCard = ({ percentage, description }) => {
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: progressRef.current,
        start: "top 80%",
      },
    });

    // progress bar animation
    tl.fromTo(
      progressRef.current,
      { width: "0%" },
      {
        width: `${percentage}%`,
        duration: 1.2,
        ease: "power2.out",
      },
      0
    );

    // counter animation
    tl.fromTo(
      { val: 0 },
      { val: percentage },
      {
        duration: 1.2,
        ease: "power2.out",
        onUpdate: function () {
          if (numberRef.current) {
            numberRef.current.innerText = Math.floor(
              this.targets()[0].val
            );
          }
        },
      },
      0
    );
  }, [percentage]);

  return (
    <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift">

      {/* TOP GRID */}
      <div className="grid grid-cols-12 items-center gap-6 mb-6">

        {/* BIG NUMBER */}
        <div className="col-span-7">
          <div className="stat-number text-high shrink-0">
            <span>Impact</span>
          </div>
        </div>

        {/* PROGRESS AREA */}
        <div className="col-span-5 flex items-center gap-4">

          {/* PROGRESS BAR */}
          <div className="flex-1 bg-gray-200 rounded-full p-1.25 shadow-inner">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-[#8ba888] rounded-full w-0"
              />
            </div>
          </div>

          {/* SMALL % */}
          <div className="text-lg font-medium text-mid whitespace-nowrap">
            <span ref={numberRef}>0</span>
            <span className="ml-1">%</span>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="text-body-sm text-mid">
        {description}
      </p>

    </div>
  );
};

const UsersCard = ({ count, suffix, description, images }) => {
  const countRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      { val: 0 },
      { val: count },
      {
        duration: 1.2,
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 80%",
        },
        ease: "power2.out",
        onUpdate: function () {
          if (countRef.current) {
            countRef.current.innerText = Math.floor(
              this.targets()[0].val
            );
          }
        },
      }
    );
  }, [count]);

  return (
    <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift">

      {/* TOP GRID */}
      <div className="grid grid-cols-12 items-center gap-6 mb-6">

        {/* LEFT SIDE - BIG NUMBER */}
        <div className="col-span-7">
          <div className="stat-number text-high">
            <span ref={countRef}>0</span>
            <span className="ml-1">{suffix}</span>
          </div>
        </div>

        {/* RIGHT SIDE - USER AVATARS */}
        <div className="col-span-5 flex items-center justify-end -space-x-3">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="w-10 h-10 rounded-full border-2 border-surface object-cover"
            />
          ))}
        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="text-body-sm text-mid">
        {description}
      </p>

    </div>
  );
};

const StatsCard = ({ count, suffix, description, icon }) => {
  const countRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      { val: 0 },
      { val: count },
      {
        duration: 1.2,
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 80%",
        },
        ease: "power2.out",
        onUpdate: function () {
          if (countRef.current) {
            countRef.current.innerText = Math.floor(
              this.targets()[0].val
            );
          }
        },
      }
    );
  }, [count]);

  return (
    <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift">

      {/* TOP GRID */}
      <div className="grid grid-cols-12 items-center gap-6 mb-6">

        {/* LEFT SIDE - BIG NUMBER */}
        <div className="col-span-7">
          <div className="stat-number text-high">
            <span ref={countRef}>0</span>
            <span className="ml-1">{suffix}</span>
          </div>
        </div>

        {/* RIGHT SIDE - ICON */}
        <div className="col-span-5 flex justify-end text-accent">
          <div className="w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="text-body-sm text-mid">
        {description}
      </p>

    </div>
  );
};

// Main Component
const WhyUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const stickyRef = useRef(null);

  // Sample data
  const userImages = [
    {
      src: "https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7b5089b73540c4eb9c2d6_image3.webp",
      alt: "User 1",
    },
    {
      src: "https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7b5089ff529654b16eb90_image1.webp",
      alt: "User 2",
    },
    {
      src: "https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7b508ab9d8f2ecc7a4d5c_image4.webp",
      alt: "User 3",
    },
    {
      src: "https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7b508dc9797d92e7c495f_image2.webp",
      alt: "User 4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardsWrapper = cardsWrapperRef.current;
      const headingElement = titleRef.current;
      
      // Get positions
      const headingRect = headingElement.getBoundingClientRect();
      const lastCard = cardsWrapper.children[cardsWrapper.children.length - 1];
      
      if (!lastCard) return;
      
      const lastCardRect = lastCard.getBoundingClientRect();
      
      // Calculate minimal scroll needed for last card to align with heading
      const headingTop = headingRect.top;
      const lastCardTop = lastCardRect.top;
      
      // Further reduced calculations for minimal scrolling
      const targetLastCardPosition = headingTop + 20; // Much smaller offset
      const scrollDistance = Math.max(0, lastCardTop - targetLastCardPosition - 150); // Reduced buffer

      // Minimized timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${Math.min(scrollDistance + 50, 200)}`, // Significantly reduced end
          pin: true,
          scrub: 0.8, // Faster scrub
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Clean up after pin is released
          onLeave: () => {
            gsap.set(cardsWrapper, { clearProps: "transform" });
          },
          onLeaveBack: () => {
            gsap.set(cardsWrapper, { clearProps: "transform" });
          }
        },
      });

      // Faster heading animation
      tl.fromTo(
        titleRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        },
        0
      );

      // Quick card movement
      tl.to(cardsWrapper, {
        y: -scrollDistance,
        ease: "power1.inOut",
        duration: 0.6,
      }, 0.1);
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-visible"
        style={{ height: "80vh" }} // Reduced from 100vh to 80vh
      >
        {/* Sticky container - adjusted height */}
        <div
          ref={stickyRef}
          className="sticky top-0 flex overflow-visible"
          style={{ height: "80vh" }} // Match parent height
        >
          <div className="container mx-auto container-padding h-full">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 h-full"> {/* Reduced gaps */}
              {/* Left side - Heading */}
              <div className="lg:w-5/12 h-full">
                <div className="flex items-start h-full pt-12 lg:pt-16"> {/* Reduced padding */}
                  <div
                    ref={titleRef}
                    className="will-change-transform"
                    style={{
                      opacity: 0,
                      transform: "translateY(10px)",
                    }}
                  >
                    <h2 className="section-heading text-high mb-1">Why client</h2> {/* Reduced margin */}
                    <h2 className="section-heading text-accent">choose us</h2>
                  </div>
                </div>
              </div>

              {/* Right side - Cards Container */}
              <div className="lg:w-7/12 h-full">
                <div className="flex justify-end h-full lg:pt-60"> {/* Reduced padding */}
                  <div className="max-w-130 w-full">
                    <div className="relative">
                      <div
                        ref={cardsWrapperRef}
                        className="flex flex-col gap-3 will-change-transform" 
                        style={{
                          transform: "translateZ(0)",
                          paddingTop: "0.5rem", // Minimal padding
                        }}
                      >
                        {/* Card 1 - Text */}
                        <TextCard>
                          We provide tailored solutions built on creativity,
                          precision, and trust.
                        </TextCard>

                        {/* Card 2 - Progress + 92% */}
                        <ProgressCard
                          percentage={92}
                          description="Client satisfaction rate, fostering long-term relationships"
                        />

                        {/* Card 3 - Users + 100+ */}
                        <UsersCard
                          count={100}
                          suffix="+"
                          description="Active users experiencing our design every day"
                          images={userImages}
                        />

                        {/* Card 4 - Lottie + 30K */}
                        <StatsCard
                          count={30}
                          suffix="K"
                          description="Delivered high-quality projects with exceptional attention"
                          icon={
                            <div className="w-16 h-16">
                              <Lottie
                                animationData={null}
                                loop={true}
                                className="w-full h-full"
                              />
                            </div>
                          }
                        />

                        {/* Card 5 - Text */}
                        <TextCard>
                          We deliver creative solutions with quality results that
                          make an impact.
                        </TextCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add this style block in your component or global CSS */}
      <style jsx>{`
        section {
          margin-bottom: -2rem; /* Pull next section up */
        }
      `}</style>
    </>
  );
};

export default WhyUs;