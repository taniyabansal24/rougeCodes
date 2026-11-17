// components/AboutPage/TeamSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import bikeshImg from "../../assets/team-bikesh.webp";
import sarthakImg from "../../assets/team-sarthak.webp";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: "Bikesh Kumar",
    role: "CEO & CTO",
    image: bikeshImg,
    bio: "Leads RougeCodes’ vision and technology — guiding how products are planned, engineered and delivered.",
  },
  {
    name: "Sarthak Arora",
    role: "Technical Director & Co-founder",
    image: sarthakImg,
    imageAlign: "left",
    bio: "Specialises in scalable architectures and emerging technologies, ensuring our solutions are future-ready.",
  },
];

export function TeamCard({ member, cardRef }) {
  return (
    <li ref={cardRef} className="group list-none">
      <figure>
        <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl border border-black/10 bg-[#e8eee6]">
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_top,transparent,#000)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(21, 25, 28, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(21, 25, 28, 0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          {/* Arch spotlight */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[10%] bottom-0 h-3/4 rounded-t-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.75),transparent)]"
          />

          {/* Portrait Image */}
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            width="800"
            height="900"
            loading="lazy"
            decoding="async"
            className={`absolute bottom-0 w-auto max-w-none object-contain object-bottom ${
              member.imageAlign === "left"
                ? "left-0 h-[96%]"
                : "left-1/2 h-[92%] -translate-x-1/2"
            } transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
            style={{ transformOrigin: "50% 100%" }}
          />
        </div>

        <figcaption className="mt-5">
          <p className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#15191c]">
            {member.name}
          </p>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-[#2c6e1a] mt-2">
            {member.role}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[#5b636b]">
            {member.bio}
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

export default function TeamSection({
  eyebrow = "The team",
  title = "The people behind the work.",
  lead = "RougeCodes is led by its founders, who stay close to the engineering and the people we build for.",
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Team Cards Staggered Entrance
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden" aria-labelledby="team-title">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Header Column */}
          <div ref={headerRef} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#5b636b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3f9526] shadow-[0_0_0_3px_rgba(63,149,38,0.18)]" />
              <span>{eyebrow}</span>
            </div>

            <h2
              id="team-title"
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-['Phudu',sans-serif] text-[#15191c] leading-[1.1]"
            >
              {title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#5b636b] leading-relaxed max-w-md">
              {lead}
            </p>
          </div>

          {/* Cards Grid */}
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-6 p-0 m-0">
            {TEAM.map((m, i) => (
              <TeamCard
                key={m.name}
                member={m}
                cardRef={(el) => (cardsRef.current[i] = el)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
