import React, { useEffect, useRef } from 'react';

const CallToAction = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            if (contentRef.current) {
              contentRef.current.classList.add('content-visible');
            }
            
            shapesRef.current.forEach((shape, index) => {
              if (shape) {
                setTimeout(() => {
                  shape.classList.add('shape-visible');
                }, index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="cta-section relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={el => shapesRef.current[0] = el}
          className="shape shape-1 absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 168, 136, 0.15) 0%, rgba(139, 168, 136, 0) 70%)',
            top: '-200px',
            right: '-100px',
          }}
        />
        
        <div 
          ref={el => shapesRef.current[1] = el}
          className="shape shape-2 absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 168, 136, 0.1) 0%, rgba(139, 168, 136, 0) 70%)',
            bottom: '-100px',
            left: '-50px',
          }}
        />
        
        <div 
          ref={el => shapesRef.current[2] = el}
          className="shape shape-3 absolute rounded-full"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139, 168, 136, 0.2) 0%, rgba(139, 168, 136, 0) 70%)',
            top: '50%',
            left: '60%',
          }}
        />

        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#8ba888" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={contentRef}
          className="cta-content text-center space-y-8"
        >
          {/* Pre-heading - Using same text-subtitle-accent class as Vision section */}
          <div className="mb-8">
            <span className="badge text-accent border-accent/20">
              Let's Work Together
            </span>
          </div>

          {/* Main heading */}
          <h2 className="section-heading text-high">
            Ready to bring your 
            <span className="relative inline-block mx-2">
              <span className="text-accent">vision</span>
              <span className="heading-underline absolute bottom-0 left-0 w-full h-0.5 bg-accent opacity-30" />
            </span>
            to life?
          </h2>

          {/* Description */}
          <p className="subheading text-mid max-w-2xl mx-auto">
            Let's discuss how our services can help transform your ideas into reality. 
            We're just one message away from starting your next great project.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              className="group relative px-8 py-4 rounded-lg btn-text transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-1 bg-accent text-white"
              style={{ boxShadow: '0 10px 25px -5px rgba(139, 168, 136, 0.4)' }}
            >
              <span className="absolute inset-0 w-full h-full transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative flex items-center justify-center gap-2">
                Schedule a Consultation
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button 
              className="group relative px-8 py-4 rounded-lg btn-text transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-transparent text-high"
              style={{ border: '1px solid rgba(139, 168, 136, 0.3)' }}
            >
              <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-accent/5 rounded-[inherit]" />
              <span className="relative flex items-center justify-center gap-2">
                View Our Work
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          opacity: 1;
          visibility: visible;
        }
        
        .shape {
          transform: scale(0);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }
        
        .shape-1 { transition-delay: 0.1s; }
        .shape-2 { transition-delay: 0.3s; }
        .shape-3 { transition-delay: 0.5s; }
        
        .shape-visible {
          transform: scale(1) !important;
          opacity: 0.15 !important;
        }
        
        .cta-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .content-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .heading-underline {
          transform: scaleX(0);
          transition: transform 0.7s ease-out 0.5s;
          transform-origin: left;
        }
        
        .content-visible .heading-underline {
          transform: scaleX(1);
        }
        
        .pre-heading {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s;
        }
        
        .content-visible .pre-heading {
          opacity: 1;
          transform: translateY(0);
        }
        
        .heading {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s;
        }
        
        .content-visible .heading {
          opacity: 1;
          transform: translateY(0);
        }
        
        .description {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;
        }
        
        .content-visible .description {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-buttons {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s;
        }
        
        .content-visible .cta-buttons {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;