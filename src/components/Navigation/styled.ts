import styled, {css} from "styled-components";
import {isMobile} from "../../common/utils";

export const StyledNavigation = styled.div.attrs({title: 'Navigation'})`
  display: flex;
  flex-direction: column;
  ${()=>!isMobile() && css`margin: 30px 0`};
  @media ${props => props.theme.media.phoneAndTablet} {
    align-items: center;
    flex-direction: row;
  }
`
