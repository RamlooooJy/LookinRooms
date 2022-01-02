import styled, {createGlobalStyle, css} from "styled-components";
import {GlobalTheme} from "./globalValues";

export const Global = createGlobalStyle`
  html {
    //noinspection CssInvalidPropertyValue
    min-height: -webkit-fill-available;
    font-size: 18px;
    background: ${GlobalTheme.colors.background};
  }

  body {
    //noinspection CssInvalidPropertyValue
    height: -webkit-fill-available;
  }
  
  #modals,
  .application * {
    font-family: 'Averia Sans Libre', sans-serif;

    outline: none;
    box-sizing: border-box;
    //font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    //'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    //sans-serif;
    a {
      color: #61dafb;
      text-decoration: none;
    }
  }
`

export const StyledApp = styled.div<{ Hheight: string }>`
  position: relative;
  overflow: auto;
  display: flex;
  flex-grow: 1;
  background-color: ${props => props.theme.colors.background};
  font-size: calc(10px + 2vmin);
  color: white;
  height: ${props => props.Hheight};
  @media ${props => props.theme.mediaQueries.phoneAndTablet} {
    flex-direction: column-reverse;
  }
`

export interface FlexI {
  direction?: 'column' | 'row'
  justify?: 'space-between' | 'stretch' | 'center' | 'flex-end' | 'flex-start' | 'normal'
  align?: 'stretch' | 'center' | 'flex-end' | 'flex-start' | 'normal'
  grow?: 1 | 0
  minHeight?: string
  margin?: string
  border?: string
  sizeY?: string
  overflow?: 'visible' | 'hidden' | 'auto'
}

interface AbsoluteI {
  top: string
  left: string
  transform?: string
  fixedBottom?: boolean
  fixedRight?: boolean
}

export const Absolute = styled.div.attrs({type: 'Absolute'})<AbsoluteI>`
  position: absolute;
  ${({fixedBottom, top}) => fixedBottom ? css`bottom: ${top}` : css`top: ${top}`};
  ${({fixedRight, left}) => fixedRight ? css`right: ${left}` : css`left: ${left}`};
  ${({transform}) => transform && css`transform: ${transform}`};
`

export const Flex = styled.div.attrs({type: 'Flex'})<FlexI>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'column'};
  justify-content: ${({justify}) => justify || 'normal'};
  align-items: ${({align}) => align || 'normal'};
  flex-grow: ${({grow}) => grow || '0'};
  ${({margin}) => margin && css`margin: ${margin}`};
  ${({border}) => border && css`border: ${border}`};
  ${({sizeY}) => sizeY && css`height: ${sizeY}`};
  ${({overflow}) => overflow && css`overflow: ${overflow}`};
  ${({minHeight}) => minHeight && css`min-height: ${minHeight}`};
`
