import styled, {css} from "styled-components";
import {DefaultComponent} from "../../common/interfaces";

export const StyledNavigation = styled.div.attrs({title: 'Navigation'})<DefaultComponent>`
  display: flex;
  flex-direction: ${({isCompact})=>isCompact ? 'row' : 'column'};
  ${({isCompact})=>!isCompact && css`margin: 30px 0`};
  @media ${props => props.theme.mediaQueries.phoneAndTablet} {
    align-items: center;
    flex-direction: row;
    button {
      border-radius: 0;
    }
  }
`
