import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ 
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Decorative top gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, #8ba888, transparent)',
          opacity: 0.3
        }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute top-0 right-0 w-64 h-64" viewBox="0 0 200 200">
          <circle cx="150" cy="50" r="80" fill="none" stroke="#8ba888" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-96 h-96" viewBox="0 0 200 200">
          <circle cx="50" cy="150" r="120" fill="none" stroke="#8ba888" strokeWidth="0.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content - Redesigned for better balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-16">
          
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo/Name with accent */}
            <div className="space-y-2">
              <h2 
                className="text-3xl font-light tracking-tight"
                style={{ color: '#1a1a1a' }}
              >
                ROUGE
                <span style={{ color: '#8ba888' }}>CODES</span>
              </h2>
              <div 
                className="w-16 h-0.5"
                style={{ backgroundColor: '#8ba888', opacity: 0.3 }}
              />
            </div>
            
            {/* Tagline */}
            <p 
              className="subheading max-w-md"
              style={{ color: '#666666' }}
            >
              Industrial grade digital engineering. We bridge the gap between abstract ideas and production-ready reality.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {['linkedin', 'twitter', 'github', 'dribbble'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(139, 168, 136, 0.05)',
                    border: '1px solid rgba(139, 168, 136, 0.1)'
                  }}
                >
                  <span className="sr-only">{social}</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: '#666666' }} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {social === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                    {social === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.507-3.323 13.5 13.5 0 002.177-7.353c0-.205-.005-.41-.015-.617a9.93 9.93 0 002.447-2.536z"/>
                    )}
                    {social === 'github' && (
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    )}
                    {social === 'dribbble' && (
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.91c.27.37 2.15 2.9 3.808 5.974 3.64-1.362 5.18-3.44 5.38-3.71-1.67-1.47-3.84-2.37-6.21-2.37-.96 0-1.89.13-2.78.37zm8.96 4.517c-.235.315-1.88 2.493-5.616 4.05.236.474.48.95.71 1.43.08.165.157.33.23.498 3.31-.408 6.628.206 6.974.27-.02-2.29-.87-4.403-2.3-6.05z"/>
                    )}
                  </svg>
                  <span 
                    className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      boxShadow: '0 0 0 1px rgba(139, 168, 136, 0.3)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - 3 columns */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 
              className="badge font-semibold mb-5"
              style={{ color: '#8ba888' }}
            >
              Navigate
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-body group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ color: '#666666' }}
                  >
                    <span 
                      className="w-0 group-hover:w-2 h-0.5 transition-all duration-300"
                      style={{ backgroundColor: '#8ba888' }}
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 4 columns - Made more compact and balanced */}
          <div className="lg:col-span-4">
            <h3 
              className="badge font-semibold mb-6"
              style={{ color: '#8ba888' }}
            >
              Contact
            </h3>
            
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:hello@rougecodes.com"
                className="text-body group flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: '#666666' }}
              >
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" 
                  style={{ color: '#8ba888' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">contact@rougecodes.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-3 text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: '#666666' }}
              >
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" 
                  style={{ color: '#8ba888' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9217327326</span>
              </a>

              {/* Address - Made more compact */}
              <div className="flex items-start gap-3 text-base">
                <svg 
                  className="w-5 h-5 flex-shrink-0 mt-0.5" 
                  style={{ color: '#8ba888' }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ color: '#666666' }} className="leading-relaxed">
                  C-5, Milap Nagar, Uttam Nagar,<br />
                New Delhi - 110059
                </span>
              </div>
            </div>

            {/* Quick contact note - fills space nicely */}
            <div className="mt-6 pt-4 border-t border-dashed" style={{ borderColor: 'rgba(139, 168, 136, 0.2)' }}>
              <p className="text-xs text-accent">
                <span style={{ color: '#8ba888' }}>✦</span> Available for new projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Simplified */}
        <div 
          className="pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ 
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Copyright */}
          <p 
            className="text-sm order-2 sm:order-1"
            style={{ color: '#c0c0c0' }}
          >
            © {currentYear} ROUGECODES. All rights reserved.
          </p>

          {/* Legal Links - Centered */}
          <div className="flex gap-6 order-1 sm:order-2">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: '#c0c0c0' }}
              >
                {item} Policy
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 order-3"
            style={{ color: '#8ba888' }}
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .group:hover .group-hover\\:w-2 {
          width: 0.5rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;