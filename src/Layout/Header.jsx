import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/ui/Container";
import markDark from "../assets/brand/logo-mark.webp";
import markLight from "../assets/brand/logo-mark-light.webp";

// Arrow icon with smooth hover slide transition
export function Arrow({ up = false }) {
  const d = up ? "M4.5 11.5 11.5 4.5M5.5 4.5h6v6" : "M2.5 8h11M9 3.5 13.5 8 9 12.5";
  return (
    <span className="relative inline-flex w-4 h-4 overflow-hidden shrink-0" aria-hidden="true">
      <svg
        className="absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[130%]"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={d} />
      </svg>
      <svg
        className="absolute inset-0 -translate-x-[130%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={d} />
      </svg>
    </span>
  );
}

// Brand Logo component
export function Logo({ tone = "dark", className = "", onClick }) {
  const light = tone === "light";
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="RougeCodes — home"
      className={`group inline-flex items-center gap-2.5 rounded-md ${className}`}
    >
      <img
        src={light ? markLight : markDark}
        alt="RougeCodes"
        width="224"
        height="124"
        className="h-[22px] w-auto transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-3"
      />
      <span
        className={`text-[1.125rem] font-semibold tracking-[-0.03em] ${light ? "text-white" : "text-[#15191c]"}`}
      >
        Rouge<span className={light ? "text-[#8ba888]" : "text-[#357f20]"}>Codes</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  // Glass state after small scroll threshold (rAF-throttled, passive)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the drawer whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Handle hash scrolling on page load/change (e.g., #careers)
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      const timer = setTimeout(attempt, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  // Drawer accessibility: lock background scroll, Esc to close, focus trap
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = [
          toggleRef.current,
          ...drawerRef.current.querySelectorAll("a, button"),
        ].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close drawer if viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleCareerClick = (e) => {
    setOpen(false);
    if (pathname === "/services") {
      e.preventDefault();
      const section = document.getElementById("careers");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/services#careers");
    }
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/services#careers", label: "Careers", onClick: handleCareerClick },
  ];

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-3 z-[60] -translate-y-[200%] opacity-0 focus:translate-y-0 focus:opacity-100 px-4 py-2 bg-[#15191c] text-white rounded-full text-sm font-medium transition-all shadow-md"
      >
        Skip to content
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <Container
          className={`transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            solid ? "pt-2.5 lg:pt-3" : "pt-3 lg:pt-4"
          }`}
        >
          <div
            className={`pointer-events-auto flex h-[60px] items-center justify-between rounded-[14px] border transition-[background-color,border-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open
                ? "border-black/[0.08] bg-[#f6f6f2] px-3 shadow-[0_1px_2px_rgba(13,16,18,0.05)] sm:px-4"
                : scrolled
                  ? "border-white/60 bg-[#fafaf7]/80 backdrop-blur-xl shadow-[0_0_0_1px_rgba(21,25,28,0.06),0_12px_32px_-16px_rgba(13,16,18,0.18)] px-3 sm:px-4"
                  : "border-transparent bg-transparent px-0"
            }`}
          >
            <Logo onClick={() => setOpen(false)} />

            {/* Desktop Navigation Links */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={item.onClick}
                      className={({ isActive }) =>
                        `relative flex h-9 items-center rounded-full px-3.5 text-[0.95rem] tracking-[-0.01em] transition-colors duration-200 ${
                          isActive
                            ? "text-[#15191c] font-medium"
                            : "text-[#5b636b] hover:bg-black/[0.04] hover:text-[#15191c]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <span
                            aria-hidden="true"
                            className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#357f20] transition-all duration-300 ${
                              isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="group hidden sm:inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-[#15191c] text-white text-[0.9rem] font-medium tracking-[-0.01em] hover:bg-[#20262a] transition-all duration-200 active:scale-[0.99] shadow-xs hover:shadow-md"
              >
                <span>Let’s talk</span>
                <Arrow />
              </Link>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative grid h-11 w-11 place-items-center rounded-full text-[#15191c] transition-colors hover:bg-black/5 lg:hidden"
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 block h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-0 w-3.5"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile / Tablet Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        data-open={open}
        inert={!open ? "" : undefined}
        className={`fixed inset-0 z-40 flex flex-col bg-[#f6f6f2] transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden="true" />
        <Container className="relative flex flex-1 flex-col overflow-y-auto pb-8 pt-24 sm:pt-28">
          <ul className="flex flex-col">
            {[...navItems, { to: "/contact", label: "Contact" }].map((item, i) => (
              <li key={item.to + i} className="border-b border-black/[0.08]">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e);
                    setOpen(false);
                  }}
                  className={({ isActive }) =>
                    `group flex items-center justify-between py-4 text-[clamp(1.75rem,6vw,2.5rem)] font-semibold tracking-[-0.035em] transition-colors ${
                      isActive ? "text-[#15191c]" : "text-[#5b636b] hover:text-[#15191c]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs uppercase text-[#8a9299]">0{i + 1}</span>
                        {item.label}
                      </span>
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#357f20] bg-[#357f20] text-white"
                            : "border-black/15 text-[#5b636b] group-hover:border-[#357f20] group-hover:text-[#357f20]"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-[#15191c] px-6 py-3.5 text-[0.975rem] font-medium text-white transition-all duration-300 hover:bg-[#20262a] active:scale-[0.99] shadow-sm hover:shadow-md"
            >
              <span>Start a project</span>
              <Arrow />
            </Link>
            <div className="mt-6 flex flex-col gap-2 text-[0.95rem] text-[#5b636b] sm:flex-row sm:justify-between">
              <a href="mailto:contact@rougecodes.com" className="hover:text-[#15191c] transition-colors">
                contact@rougecodes.com
              </a>
              <a href="tel:+919217327326" className="hover:text-[#15191c] transition-colors">
                +91 92173 27326
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
