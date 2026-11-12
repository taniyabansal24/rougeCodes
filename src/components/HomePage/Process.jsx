import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import Container from "../ui/Container";

const PROCESS = [
  {
    index: "01",
    title: "Discover",
    text: "Understand your goals, audience, and core vision.",
  },
  {
    index: "02",
    title: "Strategize",
    text: "Map the architecture, user flows, and roadmap.",
  },
  {
    index: "03",
    title: "Design",
    text: "Craft clean, intuitive interfaces built to convert.",
  },
  {
    index: "04",
    title: "Develop",
    text: "Build fast, scalable code with modern technologies.",
  },
  {
    index: "05",
    title: "Launch",
    text: "Test, deploy, and support continuous growth.",
  },
];

export default function Process({ tone = "dark", eyebrow = "How we work" }) {
  const dark = tone === "dark";

  const timelineRef = useRef(null);
  const badgeRefs = useRef([]);

  // Line coordinates dynamically measured between badge 1 and badge 5
  const [desktopLine, setDesktopLine] = useState({ left: 20, width: 0, top: 19 });
  const [mobileLine, setMobileLine] = useState({ left: 19, top: 20, height: 0 });

  // Animation triggers when user scrolls onto this section and replays when returned
  const [hasStarted, setHasStarted] = useState(false);

  // Measure exact badge centers
  const measureLine = useCallback(() => {
    const ol = timelineRef.current;
    const b0 = badgeRefs.current[0];
    const b4 = badgeRefs.current[4];
    if (!ol || !b0 || !b4) return;

    const olRect = ol.getBoundingClientRect();
    const b0Rect = b0.getBoundingClientRect();
    const b4Rect = b4.getBoundingClientRect();

    const c0X = b0Rect.left - olRect.left + b0Rect.width / 2;
    const c4X = b4Rect.left - olRect.left + b4Rect.width / 2;
    const c0Y = b0Rect.top - olRect.top + b0Rect.height / 2;
    const c4Y = b4Rect.top - olRect.top + b4Rect.height / 2;

    setDesktopLine({
      left: Math.round(c0X),
      width: Math.max(0, Math.round(c4X - c0X)),
      top: Math.round(c0Y),
    });

    setMobileLine({
      left: Math.round(c0X),
      top: Math.round(c0Y),
      height: Math.max(0, Math.round(c4Y - c0Y)),
    });
  }, []);

  useLayoutEffect(() => {
    measureLine();
    window.addEventListener("resize", measureLine);

    let ro;
    if (typeof ResizeObserver !== "undefined" && timelineRef.current) {
      ro = new ResizeObserver(() => measureLine());
      ro.observe(timelineRef.current);
    }

    return () => {
      window.removeEventListener("resize", measureLine);
      if (ro) ro.disconnect();
    };
  }, [measureLine]);

  // Re-triggers animation whenever the section enters the viewport
  useLayoutEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setHasStarted(true);
          });
        } else {
          setHasStarted(false);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section relative overflow-hidden ${
        dark ? "bg-[#0d1012] text-white" : "bg-[#f9f9f9] text-[#15191c]"
      }`}
      style={{
        paddingBlock: "var(--section-y)",
      }}
      aria-labelledby="process-title"
    >
      {dark && (
        <>
          {/* Subtle 64px grid with elliptical radial fade matching redesign source */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_100%)]"
            aria-hidden="true"
          />

          {/* Ambient 36rem radial glow matching redesign source */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(108,189,74,0.10),transparent)]"
          />
        </>
      )}

      <Container className="relative">
        {/* Section Header matching site typography */}
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className="inline-flex items-center gap-2.5 text-[0.8125rem] uppercase tracking-[0.08em] text-[#b9bfc4] font-medium"
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6cbd4a] shadow-[0_0_0_3px_rgba(108,189,74,0.2)]" />
              {eyebrow}
            </p>
          )}

          <h2
            id="process-title"
            className="section-heading text-white mt-4 text-[clamp(2.2rem,1.5rem+3vw,4rem)]"
            style={{ fontFamily: '"Phudu", sans-serif' }}
          >
            From idea to launch.
          </h2>

          <p
            className="subheading text-[#b9bfc4] mt-4 max-w-2xl leading-relaxed"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            A streamlined flow built to turn concepts into reality, fast and without friction.
          </p>
        </div>

        {/* Process Timeline - Seamless single thin line connecting 1-2-3-4-5 */}
        <ol
          ref={timelineRef}
          className="relative mt-16 grid grid-cols-1 gap-0 lg:mt-20 lg:grid-cols-5 lg:gap-6"
        >
          {/* Desktop Single Seamless Thin Line (1px) */}
          {desktopLine.width > 0 && (
            <div
              className="hidden lg:block absolute h-px bg-white/15 pointer-events-none z-0"
              style={{
                left: `${desktopLine.left}px`,
                width: `${desktopLine.width}px`,
                top: `${desktopLine.top}px`,
              }}
              aria-hidden="true"
            >
              {/* Active Thin Green Line - Constant linear draw without glitches */}
              <div
                className="h-full bg-[#6cbd4a]"
                style={{
                  width: hasStarted ? "100%" : "0%",
                  transition: hasStarted ? "width 2400ms linear" : "none",
                }}
              />
            </div>
          )}

          {/* Mobile Single Seamless Thin Line (1px) */}
          {mobileLine.height > 0 && (
            <div
              className="lg:hidden absolute w-px bg-white/15 pointer-events-none z-0"
              style={{
                left: `${mobileLine.left}px`,
                top: `${mobileLine.top}px`,
                height: `${mobileLine.height}px`,
              }}
              aria-hidden="true"
            >
              {/* Active Thin Green Line on Mobile */}
              <div
                className="w-full bg-[#6cbd4a]"
                style={{
                  height: hasStarted ? "100%" : "0%",
                  transition: hasStarted ? "height 2400ms linear" : "none",
                }}
              />
            </div>
          )}

          {PROCESS.map((step, i) => (
            <li
              key={step.index}
              className="relative pb-10 pl-14 last:pb-0 lg:pb-0 lg:pl-0 group"
            >
              {/* Step Number Badge */}
              <div className="relative z-10">
                <div className="absolute left-0 top-0 lg:relative">
                  <span
                    ref={(el) => (badgeRefs.current[i] = el)}
                    className={`grid h-10 w-10 place-items-center rounded-full border text-[0.82rem] font-medium transition-colors ${
                      hasStarted
                        ? "border-[#6cbd4a] bg-[#6cbd4a] text-[#0d1012] font-semibold duration-300"
                        : "border-white/15 bg-[#0d1012] text-[#717a82] duration-0"
                    }`}
                    style={{
                      fontFamily: '"Inter Tight", sans-serif',
                      transitionDelay: hasStarted ? `${i * 600}ms` : "0ms",
                    }}
                  >
                    {step.index}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div
                className="pt-1.5 lg:mt-7 lg:pt-0"
                style={{
                  transitionDelay: hasStarted ? `${i * 600}ms` : "0ms",
                }}
              >
                <h3
                  className={`card-title text-2xl lg:text-3xl transition-colors ${
                    hasStarted ? "text-white duration-300" : "text-white/40 duration-0"
                  }`}
                  style={{
                    fontFamily: '"Phudu", sans-serif',
                    transitionDelay: hasStarted ? `${i * 600}ms` : "0ms",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-body mt-2.5 text-[0.95rem] leading-relaxed transition-colors ${
                    hasStarted ? "text-[#b9bfc4] duration-300" : "text-[#555d65] duration-0"
                  }`}
                  style={{
                    fontFamily: '"Inter Tight", sans-serif',
                    transitionDelay: hasStarted ? `${i * 600}ms` : "0ms",
                  }}
                >
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
