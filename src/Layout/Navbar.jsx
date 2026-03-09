import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "../components/ui/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const closeMenuOnOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled 
          ? "bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20" 
          : "bg-transparent"
      }`}
    >
      {/* Background blur layer for when scrolled */}
      {scrolled && (
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-white/5 via-transparent to-white/5" />
      )}
      
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-medium tracking-tight cursor-pointer group"
          onClick={() => handleNavClick("/")}
        >
          <span className="text-text-high group-hover:text-accent transition-colors duration-300">
            ROUGE
          </span>
          <span className="text-[#8BA888] group-hover:text-text-high transition-colors duration-300">
            CODES
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.slice(1).map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`relative px-2 py-1 nav-link group ${
                isActive(item.path)
                  ? "text-text-high"
                  : "text-text-mid hover:text-text-high"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isActive(item.path)
                    ? "w-full bg-accent"
                    : "w-0 bg-accent group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5 z-50 rounded-full transition-all duration-300 ${
            isMenuOpen ? "bg-white/20 backdrop-blur-sm" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-linear-to-b from-black/90 to-black/95 backdrop-blur-2xl transition-all duration-500 flex items-center justify-center ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={closeMenuOnOutsideClick}
        >
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-4xl md:text-5xl font-bold transition-all duration-300 hover:scale-110 relative group ${
                  isActive(item.path) ? "text-accent" : "text-white"
                }`}
                style={{
                  animation: isMenuOpen
                    ? `slideIn 0.5s ease-out ${index * 0.1}s forwards`
                    : "none",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-accent transform -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Add smooth backdrop filter support */
        .backdrop-blur-xl {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-2xl {
          -webkit-backdrop-filter: blur(40px);
          backdrop-filter: blur(40px);
        }
        
        .backdrop-blur-sm {
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;