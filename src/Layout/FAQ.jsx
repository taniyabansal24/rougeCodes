import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export const FAQS = [
  {
    q: "What services does RougeCodes offer?",
    a: "We design and build web applications, mobile apps, IoT products and embedded systems, and help startups ship MVPs. We also provide UI/UX and brand design, and integrate AI tools where they add real value.",
  },
  {
    q: "Can you handle both the hardware and software side of a product?",
    a: "Yes. Our IoT prototyping and embedded systems work sits alongside our web and mobile development, so firmware, connectivity, cloud and apps can be planned and built together.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope and complexity. A simple website might take 4–6 weeks, while a complex mobile app could take 3–6 months. We agree clear milestones and delivery dates during discovery.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Absolutely. We offer maintenance and support packages covering bug fixes, security updates, performance monitoring and feature enhancements as your product grows.",
  },
  {
    q: "What is your design and development process?",
    a: "Five stages: Discover, Strategize, Design, Develop, and Launch & Improve. We keep communication regular and build feedback loops into every stage.",
  },
];

function Item({ item, open, onToggle }) {
  const id = useId();

  return (
    <li className="border-b border-black/10 last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[1.075rem] sm:text-[1.15rem] font-medium tracking-[-0.015em] text-[#15191c] transition-colors focus:outline-none"
        >
          <span className="transition-colors duration-200 group-hover:text-accent">
            {item.q}
          </span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-[rotate,background-color,border-color,color] duration-300 ${
              open
                ? "rotate-45 border-[#15191c] bg-[#15191c] text-white"
                : "border-black/15 text-[#4a5157] group-hover:border-[#15191c]"
            }`}
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={`${id}-a`}
        role="region"
        aria-labelledby={`${id}-q`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`max-w-2xl pb-6 pr-6 sm:pr-12 text-[0.985rem] leading-relaxed text-[#5b636b] transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.a}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function FAQ({ items = FAQS }) {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="w-full border-t border-black/10 bg-page"
      aria-labelledby="faq-title"
    >
      <Container size="xl" className="py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 lg:pr-4">
            <span className="badge text-accent mb-3 inline-block font-medium tracking-wide uppercase text-xs sm:text-sm">
              FAQ
            </span>
            <h2
              id="faq-title"
              className="section-heading text-high mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-['Phudu',sans-serif] leading-[1.1]"
            >
              Questions, answered.
            </h2>
            <p className="subheading text-mid mt-4 leading-relaxed font-sans">
              Still curious about something? We’re happy to talk it through.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-medium text-[#15191c] shadow-xs transition-all duration-300 hover:border-black/30 hover:bg-[#15191c] hover:text-white mt-8"
            >
              <span>Ask us anything</span>
              <span
                className="relative inline-flex h-4 w-4 overflow-hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                </svg>
                <svg
                  className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-8">
            <ul className="border-t border-black/10 divide-y divide-black/10">
              {items.map((item, i) => (
                <Item
                  key={item.q}
                  item={item}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
