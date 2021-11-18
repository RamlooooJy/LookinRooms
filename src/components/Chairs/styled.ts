import styled from "styled-components";
import {RoomItemT} from "../../common/interfaces";

const size = '36px'
const mobSize = '19px'
type StyledChair = {
  color: 'default' | 'more'
  frizzed: RoomItemT["Locked"]
}
export const StyledChair = styled.div<StyledChair>`
  display: block;
  min-width: ${size};
  min-height: ${size};
  border-radius: 50%;
  background: ${({color, frizzed, theme}) =>{
    if(frizzed) return theme.colors.redTransparent
    if(color==='more') return  theme.colors.primary
    return theme.colors.colorDefault
  }};

  @media ${props => props.theme.mediaQueries.phoneAndTablet} {
    min-width: ${mobSize};
    min-height: ${mobSize};
  }

`
