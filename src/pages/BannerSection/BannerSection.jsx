import React, { Suspense, lazy } from "react";
import {
  CrxSection,
  CrxCenterContainer,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
  CrxMainTitle,
  CrxTitle,
} from "../../components/styledcomponents/globalStyles";
import CrxButton from "../../components/common/CrxButton";
import { Fade } from "react-awesome-reveal";
const Spline = lazy(() => import("@splinetool/react-spline"));

const BannerSection = ({ scrollProgress }) => {
  //const scale = 1 + scrollProgress * 0.5; // Scale the section as you scroll
  const scale = 1;
  const opacity = 1 - scrollProgress; // Fade out the section based on progress
  const transitionDuration = "0.3s ease-out"; // Smooth transition

  return (
    <CrxSection>
      <Fade>
      <CrxCenterContainer br='28px' p='3rem' bg='linear-gradient(to left bottom, #8dccf4, #95d8f7, #a0e4fa, #afeffc, #bffaff);'  className="flex-col gap-5">
        <CrxFlex
          dir="column"
          p='0 10rem'
          gap='2rem'
          sw='inherit'
        >
          <CrxTitle ls='0.5rem'>CRX FOR LIFE</CrxTitle>
          <CrxTypography fs="2rem">
            Welcome to CRX, where the future of digital currency and
            decentralized finance comes to life.
          </CrxTypography>
          <CrxButton>Associate Login</CrxButton>
        </CrxFlex>
      </CrxCenterContainer>
      </Fade>
      {/* <Suspense
        fallback={
          <CrxTypography style={{ height: "100vh", backgroundColor: "#000607" }}>
            Loading...
          </CrxTypography>
        }
      >
        <Spline scene="https://prod.spline.design/ys0Dc4M3vyVpPCh0/scene.splinecode" />
      </Suspense> */}
    </CrxSection>
  );
};

export default BannerSection;
