import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesCard = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);

  // Service data with new modern design
  const services = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
      image:
        "https://cdn.prod.website-files.com/68e3cc611e8dc047270150dc/690caf7f397c50191acdbfdc_Art%20Direction.jpg",
      listItems: [
        {
          question: "Photography",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Copywriting",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Motion Design",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Social Media Content",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
      ],
    },
    {
      id: 2,
      title: "Brand Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
      image:
        "https://cdn.prod.website-files.com/68e3cc611e8dc047270150dc/690caf7f397c50191acdbfdc_Art%20Direction.jpg",
      listItems: [
        {
          question: "Brand Identity",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Market Research",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Positioning",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Brand Voice",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
      image:
        "https://cdn.prod.website-files.com/68e3cc611e8dc047270150dc/690caf7f397c50191acdbfdc_Art%20Direction.jpg",
      listItems: [
        {
          question: "SEO Optimization",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Social Media",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Email Marketing",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "PPC Campaigns",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
      ],
    },
    {
      id: 4,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
      image:
        "https://cdn.prod.website-files.com/68e3cc611e8dc047270150dc/690caf7f397c50191acdbfdc_Art%20Direction.jpg",
      listItems: [
        {
          question: "Frontend Dev",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "Backend Dev",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "E-commerce",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
        {
          question: "CMS Integration",
          answer: "Lorem ipsum dolor sit amet consectetur. Donec quisque.",
        },
      ],
    },
  ];

  // State for accordion items
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (serviceIdx, itemIdx) => {
    const key = `${serviceIdx}-${itemIdx}`;
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const items = itemsRef.current;

    if (!section || !wrapper || items.length === 0) return;

    // Initial states - set all items except first to be hidden below
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    // Create timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    // Animate each card
    items.forEach((item, index) => {
      // Scale and border radius animation for current card
      timeline.to(item, {
        scale: 0.95,
        borderRadius: "20px",
      });

      // Bring in the next card
      if (items[index + 1]) {
        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<",
        );
      }
    });

    // Cleanup on component unmount
    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-4 pb-20 max-w-3xl">
        <div className="text-center">
          <span className="badge text-accent mb-3 inline-block">
            What We Do
          </span>
          <h1 className="section-heading text-high mb-6">
            Services we provide
          </h1>
          <p className="subheading text-mid">
            Scroll down to explore our expertise
          </p>
        </div>
      </div>

      {/* Scroll Section with cards */}
      <div ref={sectionRef} className="overflow-visible">
        <div ref={wrapperRef} className="h-screen relative ">
          {/* <div ref={wrapperRef} className="h-[87%] relative mx-8 my-20"> */}
          <div className="relative h-full w-full">
            {services.map((service, serviceIdx) => (
              <div
                key={service.id}
                ref={(el) => (itemsRef.current[serviceIdx] = el)}
                className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl shadow-2xl will-change-transform"
                style={{ position: "absolute" }}
              >
                <div className="w-full h-full">
                  <div className="w-full h-full">
                    {/* Main container - content on left, image full width with overlay */}
                    <div className="relative w-full h-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]">
                      {/* Content Container - positioned on top of image with z-index */}
                      <div className="relative z-[2] flex flex-col justify-between max-w-[550px] h-full p-[60px]">
                        <div>
                          <div className="mb-6">
                            <div
                              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300"
                              style={{
                                backgroundColor:
                                  "color-mix(in srgb, var(--accent) 20%, transparent)",
                                border:
                                  "1px solid color-mix(in srgb, var(--accent) 50%, transparent)",
                                color: "var(--accent)",
                              }}
                            >
                              {service.id}
                            </div>
                          </div>

                          <div className="">
                            <h2 className="card-title text-accent mb-4">
                              {service.title}
                            </h2>
                          </div>

                          <p className="mb-8 text-body text-white">
                            {service.description}
                          </p>

                          {/* Accordion List */}
                          <div className="w-full">
                            {service.listItems.map((item, itemIdx) => {
                              const isOpen =
                                openIndexes[`${serviceIdx}-${itemIdx}`];
                              return (
                                <div
                                  key={itemIdx}
                                  className="border-b border-white/10"
                                >
                                  <div
                                    className="flex justify-between items-center py-4 cursor-pointer group"
                                    onClick={() =>
                                      toggleAccordion(serviceIdx, itemIdx)
                                    }
                                  >
                                    <div className="subheading text-white group-hover:text-[#8ba888] transition-colors duration-300">
                                      {item.question}
                                    </div>
                                    <svg
                                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                                      viewBox="0 0 24 24"
                                      fill="#8ba888"
                                    >
                                      <path
                                        d="M12 5v14M5 12h14"
                                        stroke="#8ba888"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{
                                      height: isOpen ? "auto" : "0",
                                      opacity: isOpen ? 1 : 0,
                                    }}
                                  >
                                    <p className="text-body text-low pb-4">
                                      {item.answer}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Footer with button */}
                        <div className="mt-4">
                          <div className="mb-2">
                            <p className="text-body text-low">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </p>
                          </div>
                          <div className="">
                            {/* BUTTON */}
                            <a
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

                      {/* Image Container - absolute positioned, full size */}
                      <div className="absolute inset-0 flex justify-end items-center">
                        <img
                          src={service.image}
                          loading="lazy"
                          sizes="(max-width: 3292px) 100vw, 3292px"
                          alt={service.title}
                          className="services-image-full object-cover w-[70%] h-full"
                        />
                      </div>

                      <div
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          backgroundImage:
                            "linear-gradient(90deg, #070602 39%, #070602e6 49%, #07060200 61%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesCard;
