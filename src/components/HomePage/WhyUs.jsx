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
        duration: 1.8,
        ease: "power3.out",
      },
      0
    );

    // counter animation
    tl.fromTo(
      { val: 0 },
      { val: percentage },
      {
        duration: 1.8,
        ease: "power3.out",
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
            {/* <span className="ml-1">%</span> */}
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
        duration: 2,
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 80%",
        },
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
        duration: 2,
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 80%",
        },
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

      // Get the last card's position relative to the viewport
      const cardsWrapperRect = cardsWrapper.getBoundingClientRect();

      // Calculate how far the last card needs to move up to align with the heading
      // We want the last card to be at the same vertical position as the heading
      const headingElement = titleRef.current;
      const headingRect = headingElement.getBoundingClientRect();

      // Calculate the distance the last card needs to travel to align with heading
      // This takes into account the container padding and desired alignment
      const containerTopPadding = 50 * 16; // 50rem = 800px
      const desiredLastCardY =
        headingRect.top - cardsWrapperRect.top - containerTopPadding;

      // Total scroll distance needed
      const scrollDistance = Math.abs(desiredLastCardY) - 20; // Added buffer for smooth finish

      // Create master timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance + 600}`, // Added extra for phases
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // PHASE 1: Heading animates in
      tl.fromTo(
        titleRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 10,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
      );

      // PHASE 2: Heading shifts down smoothly
      tl.to(titleRef.current, {
        y: 150,
        duration: 2.5,
        ease: "none",
      });

      // PHASE 3: Blank space before cards start
      tl.to(
        {},
        {
          duration: 0.6,
        },
      );

      // PHASE 4: Cards scroll up until last card aligns with heading
      tl.to(cardsWrapper, {
        y: -scrollDistance,
        ease: "none",
        duration: 2,
      });

      // PHASE 5: Subtle bounce effect at the end
      tl.to(cardsWrapper, {
        y: -scrollDistance + 10,
        duration: 0.15,
        ease: "power1.inOut",
      }).to(cardsWrapper, {
        y: -scrollDistance,
        duration: 0.2,
        ease: "back.out(1.2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden "
      style={{ height: "100vh" }}
    >
      {/* Sticky container - full height */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex overflow-hidden"
      >
        <div className="container mx-auto container-padding h-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 h-full">
            {/* Left side - Heading */}
            <div className="lg:w-5/12 h-full">
              <div className="flex items-start h-full pt-20 lg:pt-32">
                <div
                  ref={titleRef}
                  className="will-change-transform"
                  style={{
                    opacity: 0,
                    transform: "translateY(40px)",
                  }}
                >
                  <h2 className="section-heading text-high mb-2">Why client</h2>
                  <h2 className="section-heading text-accent">choose us</h2>
                </div>
              </div>
            </div>

            {/* Right side - Cards Container */}
            <div className="lg:w-7/12 h-full">
              <div className="flex justify-end h-full lg:pt-200">
                <div className="max-w-130 w-full">
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        opacity: 0.5,
                        height: "0px",
                        top: "-100px",
                      }}
                    />

                    <div
                      ref={cardsWrapperRef}
                      className="flex flex-col gap-6 will-change-transform"
                      style={{
                        transform: "translateZ(0)",
                        paddingTop: "8rem",
                      }}
                    >
                      {/* Card 1 - Text */}
                      <TextCard>
                        We provide tailored solutions built on creativity,
                        precision, and trust—ensuring quality results and a
                        smooth experience every step of the way.
                      </TextCard>

                      {/* Card 2 - Progress + 92% */}
                      <ProgressCard
                        percentage={92}
                        description="Client satisfaction rate, fostering long-term relationships and repeat business"
                      />

                      {/* Card 3 - Users + 100+ */}
                      <UsersCard
                        count={100}
                        suffix="+"
                        description="Active users experiencing our design every day via products we made"
                        images={userImages}
                      />

                      {/* Card 4 - Lottie + 30K */}
                      <StatsCard
                        count={30}
                        suffix="K"
                        description="Delivered a high-quality project with exceptional attention to detail"
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
  );
};

export default WhyUs;
