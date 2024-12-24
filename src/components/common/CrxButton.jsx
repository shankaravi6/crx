import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../context/theme/ThemeContext.jsx";
import { colorTokens } from "../../context/theme/theme.js";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



const mapStateToProps = (state) => ({
    mode: state.shopping.mode,
  });
  
  const CrxComponent = (StyledComponent) => {
    const ConnectedStyledComponent = connect(mapStateToProps)(
      ({ dispatch, ...rest }) => {
        const { palette } = useThemeContext();
        return <StyledComponent {...rest} palette={palette} />;
      }
    );
  
    return ConnectedStyledComponent;
  };

const StyledButton = CrxComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1.85px solid ${(props) => props.palette.sec.high};
  border-bottom: none;
  box-shadow: ${(props) => props.palette.shadow.main} 0px;
  color: ${(props) => props.palette.text.low};
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 7px 25px;
  width: ${(props) => (props.width ? props.width : 'max-content')};
  display: block;
  border-radius: 50px;
  opacity: 0.75;
  position: relative; /* Needed for pseudo-element positioning */

  &:hover {
    opacity: 0.9;
    border: 1.85px solid ${(props) => props.palette.text.high};
    border-bottom: none;
    transition: all 0.3s ease-out;
  }

  /* Bright line with infinite animation */
  &::before {
    content: '';
    position: absolute;
    bottom: -1.5px; /* Adjust position to align the bright line */
    left: 50%;
    transform: translateX(-50%);
    width: 50px; /* Length of the line */
    height: 1.5px; /* Height for rounded line */
    background: ${(props) => props.palette.sec.mid}; /* Bright line color ff99cc 2eb8b8*/
    border-radius: 15px; /* Fully rounded ends */
    //box-shadow: 0 0 10px ${(props) => props.palette.text.low}; /* Add brightness effect */
    animation: pulseLine 1.5s infinite ease-in-out; /* Infinite animation */
  }

  /* Animation keyframes */
  @keyframes pulseLine {
    0% {
      transform: translateX(-50%) scale(1);
      opacity: 0.75;
    }
    50% {
      transform: translateX(-50%) scale(1.15); /* Slightly enlarge */
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) scale(1);
      opacity: 0.75;
    }
  }
`);



const StyledText = CrxComponent(styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  color: ${(props) => props.palette.text.main};
  transition: all .3s ease-out;
  display: block;
`)

const StyledOutlineButton = CrxComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1.85px solid ${(props) => props.palette.sec.midhigh};
  color: ${(props) => props.palette.sec.mid};
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 7px 25px;
  width: ${(props) => (props.width ? props.width : 'unset')};
  display: block;
  border-radius: 50px;
  opacity: 0.75;
  position: relative; /* Needed for pseudo-element positioning */

  &:hover {
    opacity: 0.9;
    border: 1.85px solid ${(props) => props.palette.sec.high};
    transition: all 0.3s ease-out;
  }
`);



const 
CrxButton = ({ height, width, onChange, onSubmit, onClick, onBlur, type, children, style, variant }) => {
  return (
    <>
    {variant == "outline" ?
      <StyledOutlineButton
        height={height}
        width={width}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        onBlur={onBlur}
        type={type}
        style={style}
      >
      {children}
      </StyledOutlineButton>
      :
      <StyledButton
      height={height}
      width={width}
      onChange={onChange}
      onSubmit={onSubmit}
      onClick={onClick}
      onBlur={onBlur}
      type={type}
      style={style}
    >
    <StyledText>{children}</StyledText>
    </StyledButton>
    }
    </>
  );
};

export default CrxButton;
