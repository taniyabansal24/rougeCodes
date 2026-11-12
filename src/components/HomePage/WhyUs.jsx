import React, { useRef, useState, useEffect } from "react";
import Container from "../ui/Container";

// Hook for scroll reveal using IntersectionObserver matching redesign-source Reveal behavior
function useIntersectionReveal(options = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// Reveal wrapper matching the redesign smooth animation
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Card Components with original text and styling
const TextCard = ({ children, className = "", delay = 0 }) => (
  <Reveal delay={delay}>
    <div
      className={`bg-surface p-8 rounded-2xl shadow-lg hover-lift transition-all duration-300 ${className}`}
    >
      <p className="text-body text-mid">{children}</p>
    </div>
  </Reveal>
);

const ProgressCard = ({ percentage = 92, description, delay = 0 }) => {
  const [cardRef, isVisible] = useIntersectionReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1400;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeVal * percentage));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(percentage);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, percentage]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift transition-all duration-300">
        {/* TOP GRID */}
        <div className="grid grid-cols-12 items-center gap-6 mb-2">
          {/* BIG NUMBER */}
          <div className="col-span-7">
            <div className="card-title text-high shrink-0">
              <span>Impact</span>
            </div>
          </div>

          {/* PROGRESS AREA */}
          <div className="col-span-5 flex items-center gap-4">
            {/* PROGRESS BAR */}
            <div className="flex-1 bg-gray-200 rounded-full p-1.25 shadow-inner">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8ba888] rounded-full transition-all duration-1400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: isVisible ? `${percentage}%` : "0%" }}
                />
              </div>
            </div>

            {/* SMALL % */}
            <div className="card-title font-medium text-mid whitespace-nowrap min-w-[50px] text-right">
              <span>{count}</span>
              <span className="ml-1">%</span>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-body-sm text-mid">{description}</p>
      </div>
    </div>
  );
};

const UsersCard = ({ count = 100, suffix = "+", description, images = [], delay = 0 }) => {
  const [cardRef, isVisible] = useIntersectionReveal();
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1400;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayCount(Math.floor(easeVal * count));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayCount(count);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, count]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift transition-all duration-300">
        {/* TOP GRID */}
        <div className="grid grid-cols-12 items-center gap-6 mb-2">
          {/* LEFT SIDE - BIG NUMBER */}
          <div className="col-span-7">
            <div className="card-title text-high">
              <span>{displayCount}</span>
              <span className="ml-1">{suffix}</span>
            </div>
          </div>

          {/* RIGHT SIDE - USER AVATARS */}
          <div className="col-span-5 flex items-center justify-end -space-x-3">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt || `User ${idx + 1}`}
                className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-xs transition-transform duration-300 hover:scale-110 hover:z-10"
              />
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-body-sm text-mid">{description}</p>
      </div>
    </div>
  );
};

const StatsCard = ({ count = 30, suffix = "K", description, icon, delay = 0 }) => {
  const [cardRef, isVisible] = useIntersectionReveal();
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1400;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayCount(Math.floor(easeVal * count));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayCount(count);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, count]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-surface p-8 rounded-2xl shadow-lg hover-lift transition-all duration-300">
        {/* TOP GRID */}
        <div className="grid grid-cols-12 items-center gap-6 mb-2">
          {/* LEFT SIDE - BIG NUMBER */}
          <div className="col-span-7">
            <div className="card-title text-high">
              <span>{displayCount}</span>
              <span className="ml-1">{suffix}</span>
            </div>
          </div>

          {/* RIGHT SIDE - ICON */}
          <div className="col-span-5 flex justify-end text-accent">
            <div className="w-12 h-12 flex items-center justify-center">
              {icon || (
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-body-sm text-mid">{description}</p>
      </div>
    </div>
  );
};

// Main Component
const WhyUs = () => {
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

  return (
    <section
      className="section relative overflow-visible"
      style={{ paddingBlock: "var(--section-y)" }}
      aria-labelledby="why-title"
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-[45%]">
            <div className="lg:sticky lg:top-28 xl:top-32">
              <Reveal>
                <h2 id="why-title" className="section-heading text-high mb-1">
                  Why client
                </h2>
                <h2 className="section-heading text-accent">choose us</h2>
              </Reveal>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4 sm:gap-5">
            <TextCard delay={40}>
              We provide tailored solutions built on creativity, precision, and trust.
            </TextCard>

            <ProgressCard
              percentage={92}
              description="Client satisfaction rate, fostering long-term relationships"
              delay={80}
            />

            <UsersCard
              count={100}
              suffix="+"
              description="Active users experiencing our design every day"
              images={userImages}
              delay={120}
            />

            <StatsCard
              count={30}
              suffix="K"
              description="Delivered high-quality projects with exceptional attention"
              delay={160}
            />

            <TextCard delay={200}>
              We deliver creative solutions with quality results that make an impact.
            </TextCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
