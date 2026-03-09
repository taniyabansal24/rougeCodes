import React, { useState, useEffect, useRef } from "react";

const GridIcon = ({ isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke={isActive ? "white" : "currentColor"}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm6-3h3a3 3 0 0 1 0 6h-3V3Z" />
    <path d="M12 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0v0Zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0Zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z" />
  </svg>
);

const SimpleIcon = ({ isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill={isActive ? "white" : "currentColor"}
  >
    <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a4778.8 4778.8 0 0 0-1.484-11.473c-3.316 0-5.089 2.36-6.026 4.851l-2.565 6.637c-.015-.476-.36-6.565-.36-6.565c-.204-3.052-3-4.91-5.262-4.91l2.739 16.6c3.474-.015 5.347-2.361 6.328-4.852c0 0 2.09-5.398 2.176-5.643c.015.23 1.5 10.494 1.5 10.494c3.488 0 5.362-2.202 6.37-4.606L24 3.708c-3.445 0-5.261 2.346-6.198 4.851Z" />
  </svg>
);

const LockIcon = ({ isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke={isActive ? "white" : "currentColor"}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
  </svg>
);
const Project = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeProject, setActiveProject] = useState(0);
  const rowsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Barrett Plastic Surgery",
      category: "Branding, Website",
      icon: "grid",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c00723ca0fe86a512e2e40_Barrett%20Plastic%20Surgery.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c00723ca0fe86a512e2e40_Barrett%20Plastic%20Surgery-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c00723ca0fe86a512e2e40_Barrett%20Plastic%20Surgery-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c00723ca0fe86a512e2e40_Barrett%20Plastic%20Surgery.png 848w",
    },
    {
      id: 2,
      title: "MyStudio",
      category: "Branding, Website, Art Direction",
      icon: "grid",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c007006bb62d07dc236e72_MyStudio.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c007006bb62d07dc236e72_MyStudio-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c007006bb62d07dc236e72_MyStudio-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64c007006bb62d07dc236e72_MyStudio.png 848w",
    },
    {
      id: 3,
      title: "Instead",
      category: "Creative direction, UI/UX",
      icon: "grid",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64a41e6ef1b58a94515742e2_Instead%20portfolio.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64a41e6ef1b58a94515742e2_Instead%20portfolio-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64a41e6ef1b58a94515742e2_Instead%20portfolio-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/64a41e6ef1b58a94515742e2_Instead%20portfolio.png 848w",
    },
    {
      id: 4,
      title: "Js for Webflow",
      category: "Product design",
      icon: "both",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe28f063d905a5a4e9e7_JS%20for%20Webflow.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe28f063d905a5a4e9e7_JS%20for%20Webflow-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe28f063d905a5a4e9e7_JS%20for%20Webflow-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe28f063d905a5a4e9e7_JS%20for%20Webflow.png 848w",
    },
    {
      id: 5,
      title: "ClubRare",
      category: "UX design, Landing page development",
      icon: "both",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3071cdd4a039a96a0f_ClubRare.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3071cdd4a039a96a0f_ClubRare-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3071cdd4a039a96a0f_ClubRare-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3071cdd4a039a96a0f_ClubRare.png 848w",
    },
    {
      id: 6,
      title: "Kumulus Data",
      category: "Website, Branding",
      icon: "both",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe36aebda2b70f596ddd_Kumulus.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe36aebda2b70f596ddd_Kumulus-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe36aebda2b70f596ddd_Kumulus-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe36aebda2b70f596ddd_Kumulus.png 848w",
    },
    {
      id: 7,
      title: "Hotel La Luz",
      category: "Branding, Website",
      icon: "simple",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3b6d947115e5162caf_La%20Luz.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3b6d947115e5162caf_La%20Luz-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3b6d947115e5162caf_La%20Luz-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe3b6d947115e5162caf_La%20Luz.png 848w",
    },
    {
      id: 8,
      title: "Holistik Real Estate",
      category: "Website, Branding",
      icon: "both",
      image:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe49c7833bbc70cf75f0_Holistik%20Real%20Estate.png",
      imageSrcset:
        "https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe49c7833bbc70cf75f0_Holistik%20Real%20Estate-p-500.png 500w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe49c7833bbc70cf75f0_Holistik%20Real%20Estate-p-800.png 800w, https://cdn.prod.website-files.com/638c25cc9bf138cb48dca856/6410fe49c7833bbc70cf75f0_Holistik%20Real%20Estate.png 848w",
    },
  ];

  // Replace IntersectionObserver with center-based scroll detection
  useEffect(() => {
    let ticking = false;
    let rafId;

    const updateActiveProject = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;

        const distance = Math.abs(viewportCenter - rowCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveProject(closestIndex);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateActiveProject);
        ticking = true;
      }
    };

    // Initial calculation
    updateActiveProject();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const titleLetters = ["⤵", "P", "r", "o", "j", "e", "c", "t", "s"];

  const renderIcon = (type, isActive) => {
    switch (type) {
      case "grid":
        return <GridIcon isActive={isActive} />;
      case "simple":
        return <SimpleIcon isActive={isActive} />;
      case "both":
        return (
          <>
            <div className="absolute inset-0">
              <GridIcon isActive={isActive} />
            </div>
            <div className="absolute inset-0">
              <SimpleIcon isActive={isActive} />
            </div>
          </>
        );
      default:
        return <GridIcon isActive={isActive} />;
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold flex text-[#8ba888]">
              {titleLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-300 hover:-translate-y-1 ${
                    index === 0 ? "mr-1" : ""
                  }`}
                  style={{
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h2>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="w-6 h-6 hover:rotate-90 transition-transform duration-300"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div
        className={`w-full transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div role="list" className="divide-y divide-gray-200">
          {projects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <div
                key={project.id}
                role="listitem"
                data-index={index}
                ref={(el) => (rowsRef.current[index] = el)}
                className={`relative w-full transition-all duration-700 ease-out cursor-pointer ${
                  isActive
                    ? "bg-[#8ba888] text-white"
                    : "bg-white text-black hover:bg-gray-50"
                }`}
              >
                <div className="container mx-auto px-4 py-8 md:py-10">
                  {" "}
                  {/* Increased height for better scroll space */}
                  <div className="flex items-center justify-between">
                    {/* Title and Category Section */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          {renderIcon(project.icon, isActive)}
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold">
                          {project.title}
                        </h3>
                        <span className="hidden md:inline text-base md:text-lg lg:text-xl font-bold">
                          —
                        </span>
                        <span
                          className={`hidden md:inline text-sm lg:text-base transition-colors duration-300 ${
                            isActive ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.category}
                        </span>
                        {/* Mobile category */}
                        <span
                          className={`md:hidden w-full text-sm transition-colors duration-300 ${
                            isActive ? "text-gray-300" : "text-gray-600"
                          } mt-1`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <div className="flex-shrink-0 ml-6">
                      <a
                        href={`mailto:matthisgarnier.contact@gmail.com?subject=I%20loved%20${encodeURIComponent(project.title)}%20project%2C%20Matthis%20!`}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full transition-all duration-500 hover:scale-105 ${
                          isActive
                            ? "border-white text-white hover:bg-white hover:text-black"
                            : "border-current text-current hover:bg-gray-100"
                        }`}
                      >
                        <div className="w-4 h-4">
                          <LockIcon isActive={isActive} />
                        </div>
                        <span>Contact</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Image */}
                <div
                  className={`absolute right-[12%] md:right-[18%] lg:right-[22%] top-1/2 -translate-y-1/2 w-[200px] md:w-[250px] lg:w-[300px] z-20 pointer-events-none transition-all duration-700 ease-out will-change-transform ${
                    isActive
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-90 translate-x-12"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <picture>
                      <source srcSet={project.imageSrcset} type="image/png" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
