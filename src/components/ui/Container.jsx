import React from 'react';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`max-w-8xl mx-auto px-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
