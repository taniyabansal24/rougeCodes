import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import markDark from "../assets/brand/logo-mark.webp";

function FooterHeading({ children }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-wider text-[#8a9299] mb-5 font-medium">
      {children}
    </h2>
  );
}

function FooterLink({ to, href, children }) {
  const cls =
    "inline-block py-1 text-[0.95rem] text-[#b9bfc4] hover:text-white transition-colors duration-200";
  return (
    <li>
      {to ? (
        <Link to={to} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} className={cls}>
          {children}
        </a>
      )}
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/services#careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const SERVICES = [
    { id: "web", title: "Web Development" },
    { id: "mobile", title: "Mobile Development" },
    // { id: "iot", title: "IoT Design & Prototyping" },
    { id: "embedded", title: "Embedded Systems" },
    // { id: "mvp", title: "MVP Development" },
    { id: "design", title: "UI/UX & Brand Design" },
    { id: "ai", title: "AI Tools & Integrations" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0d1012] text-white" aria-label="Footer">
      {/* Background grid pattern with soft fade */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,#000,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Ambient green radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,189,74,0.12),transparent)]"
      />

      <Container className="relative pt-20 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column - 4 columns */}
          <div className="lg:col-span-4">
            {/* Logo in light badge preserving original black 'Rouge' and greenish 'Codes' */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="RougeCodes — home"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2 shadow-xs transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={markDark}
                alt="RougeCodes"
                width="224"
                height="124"
                className="h-[22px] w-auto transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-3"
              />
              <span className="text-[1.125rem] font-semibold tracking-[-0.03em] text-[#15191c]">
                Rouge<span className="text-[#357f20]">Codes</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-[0.975rem] leading-relaxed text-[#b9bfc4]">
              Industrial-grade digital engineering. We bridge the gap between abstract ideas and
              production-ready reality.
            </p>

            {/* Social & Contact Icon Handles */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rougecodes/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[#b9bfc4] hover:border-[#357f20] hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs"
              >
                <svg className="w-4.5 h-4.5 text-[#8ba888] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rougecodes/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[#b9bfc4] hover:border-[#357f20] hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs"
              >
                <svg className="w-4.5 h-4.5 text-[#8ba888] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@rougecodes.com"
                title="Email: contact@rougecodes.com"
                aria-label="Email"
                className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[#b9bfc4] hover:border-[#357f20] hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs"
              >
                <svg className="w-4.5 h-4.5 text-[#8ba888] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+919217327326"
                title="Call: +91 92173 27326"
                aria-label="Phone"
                className="group grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[#b9bfc4] hover:border-[#357f20] hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs"
              >
                <svg className="w-4.5 h-4.5 text-[#8ba888] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M5 4h3.5l1.6 4.2-2.1 1.3a11 11 0 0 0 6.5 6.5l1.3-2.1L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column - 2 columns */}
          <nav aria-label="Explore" className="sm:col-span-1 lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-1">
              {NAV_LINKS.map((n) => (
                <FooterLink key={n.to} to={n.to}>
                  {n.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          {/* Services Column - 3 columns */}
          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <FooterLink key={s.id} to={`/services#${s.id}`}>
                  {s.title}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact Column - 3 columns */}
          <div className="lg:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-4 text-[0.95rem]">
              <li>
                <a
                  href="mailto:contact@rougecodes.com"
                  className="group flex items-start gap-3 text-[#b9bfc4] hover:text-white transition-colors"
                >
                  <svg
                    className="w-4.5 h-4.5 mt-0.5 shrink-0 text-[#6cbd4a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  <span className="border-b border-transparent group-hover:border-white transition-colors">
                    contact@rougecodes.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919217327326"
                  className="group flex items-start gap-3 text-[#b9bfc4] hover:text-white transition-colors"
                >
                  <svg
                    className="w-4.5 h-4.5 mt-0.5 shrink-0 text-[#6cbd4a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 4h3.5l1.6 4.2-2.1 1.3a11 11 0 0 0 6.5 6.5l1.3-2.1L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
                  </svg>
                  <span className="border-b border-transparent group-hover:border-white transition-colors">
                    +91 92173 27326
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C-5%2C+Milap+Nagar%2C+Uttam+Nagar%2C+New+Delhi+110059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[#b9bfc4] hover:text-white transition-colors"
                >
                  <svg
                    className="w-4.5 h-4.5 mt-0.5 shrink-0 text-[#6cbd4a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <span className="leading-relaxed">
                    <span className="block">C-5, Milap Nagar, Uttam Nagar</span>
                    <span className="block">New Delhi – 110059</span>
                    <span className="sr-only">(opens Google Maps in a new tab)</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 py-8 text-[0.875rem] text-[#686f76] sm:flex-row sm:items-center">
          <p>© {year} RougeCodes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-[#b9bfc4] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/40 group-hover:bg-white/10">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
