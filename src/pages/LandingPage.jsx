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
    <CrxContainer bg='linear-gradient(to left bottom, #d2e9f8, #c2ecffcc, #b8fcffb0, #b3e5f0eb, #bffaff)'>
    {/* bg='linear-gradient(to left bottom, #d2e9f8, #c2ecffcc, #a7dced42, #b3e5f0eb, #bffaff)' */}
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
