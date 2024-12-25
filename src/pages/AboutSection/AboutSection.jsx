import React, { forwardRef, useEffect, useState } from "react";
import {
  CrxSection,
  CrxFlex,
  CrxSubTitle,
  CrxTypography,
  CrxBox,
  CrxImg,
} from "../../components/styledcomponents/globalStyles";
import Spline from "@splinetool/react-spline";
import { Fade, Hinge, Slide } from "react-awesome-reveal";
import './AboutSection.css'
import CrxButton from "../../components/common/CrxButton";
import AboutImg from "../../../public/assets/images/about.jpeg"
import { useThemeContext } from "../../context/theme/ThemeContext";

const AboutSection = forwardRef((props, ref) => {

  const {palette} = useThemeContext();

  return (
    <CrxSection>
      <Fade>
      <CrxFlex
        gap="7.5rem"
        style={{
          minHeight: "100vh",
          padding: "50px 100px",
        }}
      >
        <CrxBox w="100%" className="flex-col gap-5" ref={ref}>
          <Fade direction="up">
          <CrxButton variant='outline'>Who we are</CrxButton>
          <CrxSubTitle ta='left'>About Us</CrxSubTitle>
          </Fade>
          <Fade direction="up">
          <CrxTypography color={palette.text.low}>
            CRX is a digital currency that operates as a globally distributed network of computers adhering to the CRX protocol. Serving as a robust infrastructure, CRX empowers communities, applications, organizations, and digital assets, facilitating their creation and utilization.
          </CrxTypography>
          </Fade>
        </CrxBox>
        <CrxBox br='28px' w="100%" h="500px">
          <CrxImg src={AboutImg} br='35px' />
        </CrxBox>
      </CrxFlex>
      </Fade>
    </CrxSection>
    
  );
});

export default AboutSection;
