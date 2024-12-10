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
const Spline = lazy(() => import("@splinetool/react-spline"));

const BannerSection = ({ scrollProgress }) => {
  //const scale = 1 + scrollProgress * 0.5; // Scale the section as you scroll
  const scale = 1;
  const opacity = 1 - scrollProgress; // Fade out the section based on progress
  const transitionDuration = "0.3s ease-out"; // Smooth transition

  return (
    <CrxSection m='-2.25rem auto 0 auto'>
      {/* <CrxCenterContainer className="flex-col gap-5">
        <CrxFlex
          style={{
            position: "relative",
            top: 0,
            transform: `scale(${scale})`,
            opacity: opacity,
            transition: `transform ${transitionDuration}, opacity ${transitionDuration}`,
            display: "flex",
            width:"100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          dir="column"
          m="-155px 0 0 0"
        >
          <CrxMainTitle fs="5rem" ls='0.5rem'>CRX FOR LIFE</CrxMainTitle>
          <CrxTypography color='#b1e7dd' fs="2rem">
            Welcome to CRX, where the future of digital currency and
            decentralized finance comes to life.
          </CrxTypography>
          <CrxButton>Associate Login</CrxButton>
        </CrxFlex>
      </CrxCenterContainer> */}
      <Suspense
        fallback={
          <CrxTypography style={{ height: "100vh", backgroundColor: "#000607" }}>
            Loading...
          </CrxTypography>
        }
      >
        <Spline scene="https://prod.spline.design/ys0Dc4M3vyVpPCh0/scene.splinecode" />
      </Suspense>
    </CrxSection>
  );
};

export default BannerSection;
