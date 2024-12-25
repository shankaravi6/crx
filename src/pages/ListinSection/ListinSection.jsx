import React from 'react'
import { CrxCard, CrxFlex, CrxGlassCard, CrxSection, CrxSubTitle, CrxSubTitle2, CrxSubTitleNor, CrxTypography } from '../../components/styledcomponents/globalStyles'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import './ListinSection.css';
import { useThemeContext } from '../../context/theme/ThemeContext';
import { colorTokens } from '../../context/theme/theme';


const ListinSection = () => {

  const {palette} = useThemeContext();

  return (
    <CrxSection p='5rem 0'>
      <Fade>
        <CrxFlex dir="column" gap="5px" p='0 0 5rem 0'>
          <CrxSubTitle fs="5rem">Our Listing</CrxSubTitle>
          <CrxTypography color={palette.sec.mid} fs="1.75rem">
          Running a successful business means more than just a website. That's why we cover all your design needs, so you don't have to go anywhere else.
          </CrxTypography>
          <Zoom>
          <CrxGlassCard m='3.5rem 0 0 0' p='2.5rem 0' w='1000px' h='auto'>
        
          <CrxFlex dir='column' gap='3rem'>
            <CrxFlex gap='5rem'>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>Coin Checkup</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>Alert ICO</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>List CoinSchedule</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>ICO Rating</CrxSubTitleNor>
            </CrxFlex>
            <CrxFlex gap='3.5rem'>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>Token Market</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>ICO Bench</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>ICO Drops</CrxSubTitleNor>
              <CrxSubTitleNor color={colorTokens.drops[700]} fs='1.8rem'>ICO Holder</CrxSubTitleNor>
            </CrxFlex>
            </CrxFlex>
          </CrxGlassCard>
          </Zoom>

        </CrxFlex>
        
      </Fade>
    </CrxSection>
  )
}

export default ListinSection
