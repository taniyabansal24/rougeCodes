import React from "react";
import HeroSection from "./HeroSection";

const HeroSection3 = (props) => (
  <HeroSection
    bgImage="/i 3.png"
    variantNumber={3}
    variantName="Soft Liquid Ripple"
    bgOpacity={0.23}
    {...props}
  />
);

export default HeroSection3;
