import styled from "styled-components";
import SpinnerSrc from "../../assets/img/look-phone-logo.png"
import {FC} from "react";

type SpinnerI = {
  background?: string
  src?: string
}
const Spinner:FC<SpinnerI> = ({background}) => <StyledSpinner background={background || ''} src={SpinnerSrc}><div /></StyledSpinner>
const StyledSpinner = styled.div<SpinnerI>`
  z-index: 999999999999999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({background, theme})=>background ? theme.colors[background] : theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  div {
    background: url("${props=>props.src}") no-repeat center center;
    display: block;
    width: 100%;
    height: 100%;
    animation: 3s ease 0s infinite normal none running live__el;
  }

  @keyframes live__el {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0.5;
      transform: rotate(0deg);
    }
    80% {
      opacity: 0.5;
      transform: rotate(360deg);

    }
    100% {
      opacity: 1;
    }
  }
`

export default Spinner
