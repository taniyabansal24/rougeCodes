// components/AboutPage/TeamSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);
  const [activeMember, setActiveMember] = useState(null);
  const membersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate team members entrance
      membersRef.current.forEach((member, index) => {
        gsap.fromTo(member,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animation
        member.addEventListener("mouseenter", () => {
          gsap.to(member, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        member.addEventListener("mouseleave", () => {
          gsap.to(member, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: "Alex Morgan",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      bio: "Alex has over 12 years of experience leading creative teams and crafting brand identities for global companies."
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108777-28666fd5f4a6?auto=format&fit=crop&w=400",
      bio: "Sarah's passion for minimalist design and user-centered approach has earned her multiple industry awards."
    },
    {
      name: "Marcus Rivera",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
      bio: "Marcus specializes in scalable architectures and emerging technologies, ensuring our solutions are future-ready."
    },
    {
      name: "Emma Watson",
      role: "Strategy Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
      bio: "Emma combines business acumen with creative thinking to develop strategies that drive real results."
    }
  ];

  return (
    <section ref={sectionRef} className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-subtitle-accent text-accent mb-3 inline-block">
            Our Team
          </span>
          <h2 className="section-heading text-high mb-6">
            The people behind the work
          </h2>
          <p className="text-body text-mid">
            A diverse group of creative minds passionate about what they do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              ref={el => membersRef.current[index] = el}
              className="group cursor-pointer opacity-0"
              onMouseEnter={() => setActiveMember(index)}
              onMouseLeave={() => setActiveMember(null)}
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bio overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-500 ${
                  activeMember === index ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <p className="text-body-sm">{member.bio}</p>
                </div>
              </div>

              <h3 className="card-title text-high mb-1">{member.name}</h3>
              <p className="text-body text-accent">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="text-center mt-16">
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover-scale transition-all duration-300"
          >
            <span>Join Our Team</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;