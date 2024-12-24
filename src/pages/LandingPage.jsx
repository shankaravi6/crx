import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import NavBar from "../components/layout/Navigation/NavBar";
import { CrxContainer } from "../components/styledcomponents/globalStyles";
import BannerSection from "./BannerSection/BannerSection";
import AboutSection from "./AboutSection/AboutSection";
import FogEffect from "./FogEffect";
import PricingSection from "./PricingSection/PricingSection";
import MissionSection from "./MissionSection/MissionSection";
import ListinSection from "./ListinSection/ListinSection";
import KeySection from "./KeySection/KeySection";
import RoadmapSection from "./RoadmapSection/RoadmapSection";

// Lazy-load the Spline component to improve initial load time
// const Spline = lazy(() => import('@splinetool/react-spline'));

const LandingPage = () => {

  return (
    <CrxContainer>
      {/* Lazy-load Spline with a fallback */}
      {/* <Suspense fallback={<div style={{ height: "100vh", backgroundColor: "#000607" }}>Loading...</div>}>
        <Spline className="spline-container" scene="https://prod.spline.design/vGYiA9vexcS0gJF5/scene.splinecode" />
      </Suspense> */}
      {/* <FogEffect /> */}
      <NavBar />
      <BannerSection />
      <AboutSection />
      <ListinSection />
      {/* <RoadmapSection/>
      <KeySection />
      <MissionSection /> */}
      {/* <PricingSection /> */}
    </CrxContainer>
  );
};

export default LandingPage;
