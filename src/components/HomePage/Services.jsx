import React, { useEffect, useRef, useCallback } from "react";

const Services = () => {
  const stackRef = useRef(null);
  const cardsRef = useRef([]);
  const stackDataRef = useRef({
    marginY: 20,
    cardTop: 0,
    cardHeight: 0,
    elementHeight: 0,
    windowHeight: 0,
    scrolling: false,
    scrollingFn: null,
  });

  const getIntegerFromProperty = useCallback((value) => {
    const node = document.createElement("div");
    node.setAttribute(
      "style",
      `opacity:0; visibility:hidden; position:absolute; height:${value}`,
    );
    stackRef.current.appendChild(node);
    const intValue = parseInt(
      getComputedStyle(node).getPropertyValue("height"),
    );
    stackRef.current.removeChild(node);
    return intValue;
  }, []);

  const setStackCards = useCallback(() => {
    if (!stackRef.current || !cardsRef.current.length) return;

    const data = stackDataRef.current;

    const marginYValue =
      getComputedStyle(stackRef.current)
        .getPropertyValue("--stack-cards-gap")
        .trim() || "20px";
    data.marginY = getIntegerFromProperty(marginYValue);

    data.elementHeight = stackRef.current.offsetHeight;

    const firstCard = cardsRef.current[0];
    if (firstCard) {
      const cardStyle = getComputedStyle(firstCard);
      data.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
      data.cardHeight = Math.floor(firstCard.offsetHeight);
    }

    data.windowHeight = window.innerHeight;

    if (isNaN(data.marginY)) {
      stackRef.current.style.paddingBottom = "0px";
    } else {
      stackRef.current.style.paddingBottom = `${data.marginY * (cardsRef.current.length - 1)}px`;
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        if (isNaN(data.marginY)) {
          card.style.transform = "none";
        } else {
          card.style.transform = `translateY(${data.marginY * index}px)`;
        }
      }
    });
  }, [getIntegerFromProperty]);

  const animateStackCards = useCallback(() => {
    const data = stackDataRef.current;

    if (isNaN(data.marginY) || !stackRef.current) {
      data.scrolling = false;
      return;
    }

    const top = stackRef.current.getBoundingClientRect().top;

    if (
      data.cardTop -
        top +
        data.windowHeight -
        data.elementHeight -
        data.cardHeight +
        data.marginY +
        data.marginY * cardsRef.current.length >
      0
    ) {
      data.scrolling = false;
      return;
    }

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const scrolling =
        data.cardTop - top - index * (data.cardHeight + data.marginY);

      if (scrolling > 0) {
        const scaling =
          index === cardsRef.current.length - 1
            ? 1
            : (data.cardHeight - scrolling * 0.05) / data.cardHeight;

        card.style.transform = `translateY(${data.marginY * index}px) scale(${scaling})`;
        card.style.opacity = scaling;
      } else {
        card.style.transform = `translateY(${data.marginY * index}px)`;
        card.style.opacity = 1;
      }
    });

    data.scrolling = false;
  }, []);

  const stackCardsScrolling = useCallback(() => {
    const data = stackDataRef.current;
    if (data.scrolling) return;

    data.scrolling = true;
    window.requestAnimationFrame(animateStackCards);
  }, [animateStackCards]);

  const stackCardsCallback = useCallback(
    (entries) => {
      const data = stackDataRef.current;

      if (entries[0].isIntersecting) {
        if (data.scrollingFn) return;

        data.scrollingFn = stackCardsScrolling;
        window.addEventListener("scroll", data.scrollingFn);
      } else {
        if (!data.scrollingFn) return;

        window.removeEventListener("scroll", data.scrollingFn);
        data.scrollingFn = null;
      }
    },
    [stackCardsScrolling],
  );

  useEffect(() => {
    if (!stackRef.current) return;

    const intersectionObserverSupported =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!intersectionObserverSupported || reducedMotion) return;

    cardsRef.current = Array.from(stackRef.current.children);
    setStackCards();

    const observer = new IntersectionObserver(stackCardsCallback, {
      threshold: [0, 1],
    });
    observer.observe(stackRef.current);

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setStackCards();
        if (stackDataRef.current.scrollingFn) {
          stackDataRef.current.scrollingFn();
        }
      }, 500);
    };

    let resizeTimeout;
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (stackDataRef.current.scrollingFn) {
        window.removeEventListener("scroll", stackDataRef.current.scrollingFn);
      }
    };
  }, [setStackCards, stackCardsCallback]);

  // Service data with icons and descriptions
  const services = [
    {
      title: "Development",
      subtitle: "Web & Mobile Apps",
      description:
        "Full-stack web and mobile application development using modern technologies. From responsive websites to complex web apps and native mobile experiences.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "React/Next.js",
        "React Native",
        "Node.js",
        "Python",
        "Cloud Architecture",
      ],
      color: "#8ba888",
    },
    {
      title: "Branding",
      subtitle: "UI/UX Design",
      description:
        "Strategic brand identity and user-centered design solutions. We create memorable experiences that connect with your audience and elevate your brand.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      features: [
        "Brand Strategy",
        "Visual Identity",
        "User Research",
        "Wireframing",
        "Prototyping",
      ],
      color: "#8ba888",
    },
    {
      title: "Startup MVP",
      subtitle: "Minimum Viable Product",
      description:
        "Rapid development of your startup idea into a market-ready MVP. We help validate your concept and get to market faster with lean methodologies.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      features: [
        "Product Strategy",
        "Rapid Prototyping",
        "Agile Development",
        "Market Validation",
        "Iterative Design",
      ],
      color: "#8ba888",
    },
    {
      title: "AI Tools",
      subtitle: "Artificial Intelligence Solutions",
      description:
        "Custom AI tools and integrations to automate processes, gain insights, and create intelligent features that give your business a competitive edge.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration",
      ],
      color: "#8ba888",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f9f9" }}>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="text-center">
          <span className="text-subtitle-accent text-accent border-accent/20">
              What We Do
            </span>
          <h1
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ color: "#1a1a1a" }}
          >
            Services we provide
          </h1>
          <p className="text-lg" style={{ color: "#666666" }}>
            Scroll down to explore our expertise
          </p>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="container mx-auto px-4 max-w-5xl mb-24">
        <ul
          ref={stackRef}
          className="stack-cards relative"
          style={{ "--stack-cards-gap": "24px" }}
        >
          {services.map((service, index) => (
            <li
              key={index}
              className="stack-cards__item sticky rounded-2xl overflow-hidden transition-all duration-200 ease-out will-change-transform opacity-100"
              style={{
                transformOrigin: "center top",
                marginTop: index > 0 ? "-24px" : "0",
                backgroundColor: "#ffffff",
                boxShadow:
                  "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Left side - Content */}
                <div className="p-8 md:p-10 flex items-center">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div style={{ color: service.color }}>{service.icon}</div>

                    {/* Title */}
                    <div>
                      <h2
                        className="service-title"
                        style={{ color: "#1a1a1a" }}
                      >
                        {service.title}
                      </h2>
                      <p
                        className="service-subtitle"
                        style={{ color: service.color }}
                      >
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#666666" }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                         className="feature-tag"
                          style={{
                            backgroundColor: "rgba(139, 168, 136, 0.1)",
                            color: "#666666",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div>
                      <button
                        className="btn-text group relative px-6 py-2.5 rounded-lg transition-all duration-300 hover-lift "
                        style={{
                          backgroundColor: "#8ba888",
                          color: "#ffffff",
                        }}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual */}
                <div
                  className="relative h-64 md:h-auto overflow-hidden"
                  style={{ backgroundColor: "rgba(139, 168, 136, 0.05)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      {service.features.slice(0, 4).map((_, idx) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-lg"
                          style={{
                            backgroundColor: "#ffffff",
                            boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1)",
                            border: "1px solid rgba(0, 0, 0, 0.02)",
                          }}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <div
                              className="w-8 h-8 rounded-full"
                              style={{
                                backgroundColor:
                                  idx === 0
                                    ? "#8ba888"
                                    : idx === 1
                                      ? "rgba(139, 168, 136, 0.6)"
                                      : idx === 2
                                        ? "rgba(139, 168, 136, 0.3)"
                                        : "rgba(139, 168, 136, 0.1)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative pattern */}
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                    style={{ opacity: 0.1 }}
                  >
                    <path
                      d="M0,50 Q100,0 200,50 T400,50 L400,100 L0,100 Z"
                      fill="#8ba888"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .stack-cards {
          --stack-cards-gap: 24px;
        }

        .stack-cards__item {
          position: -webkit-sticky;
          position: sticky;
          top: 7rem;
          height: auto;
          min-height: 500px;
          transition:
            transform 0.3s var(--ease),
            opacity 0.3s var(--ease);
        }

        .stack-cards__item > * {
          width: 100%;
          height: 100%;
        }

        @media (min-width: 768px) {
          .stack-cards__item {
            min-height: 550px;
          }
        }

        .text-component {
          --line-height-multiplier: 1;
          --text-vspace-multiplier: 1;
        }

        .text-component p {
          line-height: 1.7;
        }

        .btn {
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          transition: all 0.3s var(--ease);
        }

        .btn:active {
          transform: translateY(2px);
        }
      `}</style>
    </div>
  );
};

export default Services;
