import React, { useEffect, useState, useRef } from "react";
import NavBar from "../components/layout/Navigation/NavBar";
import { CrxContainer } from "../components/styledcomponents/globalStyles";
import BannerSection from "./BannerSection/BannerSection";
import AboutSection from "./AboutSection/AboutSection";
import FogEffect from "./FogEffect";
import PricingSection from "./PricingSection/PricingSection";
import KeySection from "./KeySection/KeySection";
import ListinSection from "./ListinSection/ListinSection";

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = window.innerHeight; // Height of the banner section
      const scrollTop = window.scrollY; // Current scroll position

      // Calculate the scroll progress for zoom and fade
      const progress = Math.min(scrollTop / bannerHeight, 1); // Clamp between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CrxContainer className="overflow-x-hidden" bg="#000607">
      <FogEffect />
      <NavBar />
      <BannerSection scrollProgress={scrollProgress} />
      <ListinSection/>
      <AboutSection ref={aboutRef} />
      {/* <KeySection/> */}
      <PricingSection/>
    </CrxContainer>
  );
};

export default LandingPage;
