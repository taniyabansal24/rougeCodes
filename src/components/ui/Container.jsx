import React, { forwardRef } from 'react';

const SIZES = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

/**
 * Responsive container primitive for consistent site-wide layout alignment.
 * 
 * @param {'div'|'section'|'header'|'main'|'article'} [as='div'] - HTML tag to render
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [size='xl'] - Max-width constraint (defaults to max-w-7xl)
 * @param {string} [className=''] - Additional utility classes
 */
const Container = forwardRef(function Container(
  {
    as: Component = 'div',
    size = 'xl',
    className = '',
    children,
    ...props
  },
  ref
) {
  const maxWidth = SIZES[size] || SIZES.xl;

  return (
    <Component
      ref={ref}
      className={`w-full ${maxWidth} mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

export default Container;
