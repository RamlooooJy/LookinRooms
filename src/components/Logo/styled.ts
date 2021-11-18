import styled from "styled-components";
import {LogoI} from "./index";


export const StyledLogo = styled.img<Omit<LogoI, 'onClick'> >`
  height: ${({little}) => little ? '65px' : 'auto'};
  width: 100%;
`
