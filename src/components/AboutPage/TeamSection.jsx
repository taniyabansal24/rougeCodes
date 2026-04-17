// // components/AboutPage/TeamSection.jsx
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import techLeadImage from "../../assets/taniya.png";

// gsap.registerPlugin(ScrollTrigger);

// const TeamSection = () => {
//   const sectionRef = useRef(null);
//   const [activeMember, setActiveMember] = useState(null);
//   const membersRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate team members entrance
//       membersRef.current.forEach((member, index) => {
//         gsap.fromTo(member,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: index * 0.1,
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top 70%",
//               end: "center center",
//               toggleActions: "play none none reverse"
//             }
//           }
//         );

//         // Hover animation
//         member.addEventListener("mouseenter", () => {
//           gsap.to(member, {
//             y: -10,
//             duration: 0.3,
//             ease: "power2.out"
//           });
//         });

//         member.addEventListener("mouseleave", () => {
//           gsap.to(member, {
//             y: 0,
//             duration: 0.3,
//             ease: "power2.out"
//           });
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const team = [
//     {
//       name: "Bikesh Kumar",
//       role: "Creative Director & Co-founder",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
//       bio: "Bikesh has over 12 years of experience leading creative teams and crafting brand identities for global companies."
//     },
//     {
//       name: "Sarthak Arora",
//       role: "Technical Director & Co-founder",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
//       bio: "Sarthak specializes in scalable architectures and emerging technologies, ensuring our solutions are future-ready."
//     },
//     {
//       name: "Taniya Bansal",
//       role: "Technical Lead",
//       image: techLeadImage,
//       bio: "Taniya specializes in scalable architectures and emerging technologies, ensuring our solutions are future-ready."
//     },
//     {
//       name: "Satya Prakash",
//       role: "Strategy Lead",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
//       bio: "Satya combines business acumen with creative thinking to develop strategies that drive real results."
//     },
//     {
//       name: "Aayush Mehta",
//       role: "Strategy Lead",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
//       bio: "Aayush combines business acumen with creative thinking to develop strategies that drive real results."
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="relative">
//       <div className="container mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="badge mb-3 inline-block">
//             Our Team
//           </span>
//           <h2 className="section-heading text-high mb-6">
//             The people behind <br /> the work
//           </h2>
//           <p className="subheading text-mid">
//             A diverse group of creative minds passionate about what they do.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               ref={el => membersRef.current[index] = el}
//               className="group cursor-pointer opacity-0"
//               onMouseEnter={() => setActiveMember(index)}
//               onMouseLeave={() => setActiveMember(null)}
//             >
//               <div className="relative mb-4 overflow-hidden rounded-2xl">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 {/* Bio overlay */}
//                 <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-500 ${
//                   activeMember === index ? 'translate-y-0' : 'translate-y-full'
//                 }`}>
//                   <p className="text-body">{member.bio}</p>
//                 </div>
//               </div>

//               <h3 className="card-title text-high mb-1">{member.name}</h3>
//               <p className="text-body text-accent">{member.role}</p>
//             </div>
//           ))}
//         </div>

//         {/* Join the team CTA */}
//         <div className="text-center mt-16">
//           <a
//             href="/careers"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover-scale transition-all duration-300"
//           >
//             <span>Join Our Team</span>
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;




// components/AboutPage/TeamSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import techLeadImage from "../../assets/taniya.png";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);
  const [activeMember, setActiveMember] = useState(null);
  const membersRef = useRef([]);
    

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      name: "Bikesh Kumar",
      role: "Creative Director & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      bio: "Bikesh has over 12 years of experience leading creative teams and crafting brand identities for global companies."
    },
    {
      name: "Sarthak Arora",
      role: "Technical Director & Co-founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
      bio: "Sarthak specializes in scalable architectures and emerging technologies, ensuring our solutions are future-ready."
    },
    {
      name: "Taniya Bansal",
      role: "Technical Lead",
      image: techLeadImage,
      bio: "Taniya specializes in scalable architectures and emerging technologies, ensuring our solutions are future-ready."
    },
    {
      name: "Satya Prakash",
      role: "Strategy Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
      bio: "Satya combines business acumen with creative thinking to develop strategies that drive real results."
    },
    {
      name: "Aayush Mehta",
      role: "Strategy Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
      bio: "Aayush combines business acumen with creative thinking to develop strategies that drive real results."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge mb-3 inline-block">
            Our Team
          </span>
          <h2 className="section-heading text-high mb-4">
            The people behind <br /> the work
          </h2>
          <p className="subheading text-mid">
            A diverse group of creative minds passionate about what they do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              ref={el => membersRef.current[index] = el}
              className="group cursor-pointer opacity-0 text-center"
              onMouseEnter={() => setActiveMember(index)}
              onMouseLeave={() => setActiveMember(null)}
            >
              {/* Passport size photo style */}
              <div className="relative mb-3 overflow-hidden rounded-full w-52 h-52 mx-auto border-2 border-gray-200 shadow-md">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
  
  {/* Bio overlay on hover - updated with text-body */}
  <div className={`absolute bottom-0 left-0 right-0 p-4 text-white text-center transform transition-transform duration-500 ${
    activeMember === index ? 'translate-y-0' : 'translate-y-full'
  }`}>
    <p className="text-sm">{member.bio}</p>
  </div>
</div>

              <h3 className="card-title text-high mb-1">{member.name}</h3>
              <p className="text-body text-accent">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="text-center mt-12">
            {/* Button */}
            <a href="/contact" className="inline-block group">
              <div className="flex items-center space-x-4 bg-accent text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300 shadow-xl">
                <span className="btn-text relative overflow-hidden h-6">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    Join Our Team
                  </span>
                  <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:top-0">
                    Join Our Team
                  </span>
                </span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="relative w-5 h-5">
                    <svg
                      className="absolute top-0 left-0 transition-transform duration-300 group-hover:-translate-x-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <svg
                      className="absolute top-0 left-full transition-transform duration-300 group-hover:left-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;