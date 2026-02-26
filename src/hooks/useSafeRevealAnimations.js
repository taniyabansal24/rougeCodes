import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useSafeRevealAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization in strict mode
    if (initialized.current) return;
    initialized.current = true;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if elements exist before animating
      const maskSpans = document.querySelectorAll('.mask span');
      const heroElements = document.querySelectorAll('.hero-title-wrap h1, .hero-accent-rotate, .hero-desc-wrap');
      
      if (maskSpans.length > 0) {
        // Animate mask spans if they exist
        gsap.to(maskSpans, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out'
        });
      }

      if (heroElements.length > 0) {
        // Animate hero elements
        gsap.fromTo(heroElements, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.5
          }
        );
      }

      // Animate the moving title
      const movingTitle = document.querySelector('.hero-moving-title');
      if (movingTitle) {
        gsap.to(movingTitle, {
          x: '-10%',
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }

    }, 100);

    return () => {
      clearTimeout(timer);
      initialized.current = false;
    };
  }, []);
};

export default useSafeRevealAnimations;