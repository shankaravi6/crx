import React from "react";
import {
  CrxSection,
  CrxCenterContainer,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
} from "../../components/styledcomponents/globalStyles";
import CrxButton from "../../components/common/CrxButton";

const BannerSection = ({ scrollProgress }) => {
  const scale = 1 + scrollProgress * 0.5; // Scale the section as you scroll
  const opacity = 1 - scrollProgress; // Fade out the section based on progress
  const transitionDuration = "0.3s ease-out"; // Smooth transition

  return (
    <CrxSection>
      <CrxCenterContainer className="flex-col gap-5">
        <CrxFlex
          style={{
            position: "sticky",
            top: 0,
            transform: `scale(${scale})`,
            opacity: opacity,
            transition: `transform ${transitionDuration}, opacity ${transitionDuration}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          dir="column"
          m="-155px 0 0 0"
        >
          <CrxSubTitle fs="5rem">CRX FOR LIFE</CrxSubTitle>
          <CrxTypography fs="2rem">
            Welcome to CRX, where the future of digital currency and
            decentralized finance comes to life.
          </CrxTypography>
          <CrxButton>Associate Login</CrxButton>
        </CrxFlex>
      </CrxCenterContainer>
    </CrxSection>
  );
};

export default BannerSection;
