import React, { useRef, useEffect, useState } from "react";
import {
  CrxBox,
  CrxFlex,
  CrxImg,
  CrxSection,
  CrxSubTitle,
  CrxSubTitle2,
  CrxTypography,
} from "../../components/styledcomponents/globalStyles";
import { Fade } from "react-awesome-reveal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const KeySection = () => {
    const imageSectionRef = useRef(null);
    const contentRef = useRef(null);
    useEffect(() => {
        const imageSection = imageSectionRef.current;
        const content = contentRef.current;
    
    
        // ScrollTrigger for sticky image section (no pinning, only scroll effect)
        ScrollTrigger.create({
          trigger: imageSection,
          start: "top top", // Start when the image section is at the top of the viewport
          end: content, // End when the content section ends
          pin: true, // Pin the image
          pinSpacing: true, // Add space after pinning so content scrolls
          scrub: false, // Smooth scrolling
        });
      }, []);
  return (
    <CrxSection>
      <Fade>
        <CrxFlex dir="column" p="2rem 0 5rem 0">
          <CrxFlex dir="column" p="0 0 2rem 0">
            <CrxSubTitle fs="5rem">Key features of CRX</CrxSubTitle>
          </CrxFlex>
          <CrxFlex gap="5rem">
            {/* Left Content */}
            <CrxBox  
              w="100%"
              h="100%"
              className="flex-col gap-5"
            >
            <CrxFlex dir='column' gap='2rem' ref={contentRef}>
              <CrxFlex al="start" dir="column" gap="2rem">
                <CrxSubTitle2>
                  High security and transparency through blockchain technology:
                </CrxSubTitle2>
                <CrxTypography>
                  One Bond utilizes the Binance Smart Chain (BSC) to ensure
                  topnotch security and transparency. Every transaction is
                  immutable and traceable on the blockchain, providing users
                  with confidence in a secure, decentralized ecosystem that
                  eliminates the risk of fraud or tampering.
                </CrxTypography>
              </CrxFlex>
              <CrxFlex al="start" dir="column" gap="2rem">
                <CrxSubTitle2>
                Accessibility and ease of use:
                </CrxSubTitle2>
                <CrxTypography>
                Designed for seamless integration, One Bond offers a user-friendly platform that ensures easy access to decentralized finance (DeFi) opportunities. With low transaction fees and fast processing times, users worldwide can participate in staking and other financial activities without any barriers.
                </CrxTypography>
              </CrxFlex>
              </CrxFlex>
            </CrxBox>
            {/* Right Content */}
            <CrxBox w="100%" h="100%">
              <CrxFlex 
              >
                <CrxImg  ref={imageSectionRef}  src='https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png' />
              </CrxFlex>
            </CrxBox>
          </CrxFlex>
        </CrxFlex>
      </Fade>
    </CrxSection>
  );
};

export default KeySection;
