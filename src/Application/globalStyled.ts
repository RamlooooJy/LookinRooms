import styled, {createGlobalStyle, css} from "styled-components";

export const Global = createGlobalStyle`
  html {
    min-height: -webkit-fill-available;
  }
  body {
    height: -webkit-fill-available;
    overflow: hidden;
  }
  .application * {
    font-family: 'Averia Sans Libre', sans-serif;

    outline: none;
    box-sizing: border-box;
    //font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    //'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    //sans-serif;
  }
  .application a {
    color: #61dafb;
    text-decoration: none;
  }
`

export const StyledApp = styled.div<{Hheight: string}>`
  position: relative;
  overflow: auto;
  display: flex;
  flex-grow: 1;
  background-color: ${props => props.theme.colors.background};
  font-size: calc(10px + 2vmin);
  color: white;
  height: ${props=>props.Hheight};
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

const tablet = 1200
export const Dimensions = {
  phone: 560,
  tablet: tablet,
  pc: 1600,
  phoneAndTablet: tablet,
}
export const GlobalTheme = {
  colors: {
    primary: '#6C5DD3',
    red: 'rgb(139,0,0)',
    dark: '#24282e',
    fontSmooth: '#808191',
    fontCommon: '#F0F8FFFF',
    secondary: '#3F8CFF',
    orange: '#ff754c',
    gray: '#323540',
    silver: '#484A57',
    background: '#282c34',
    // transparent
    colorDefault: 'rgba(128, 129, 145, .6)',
    primaryTransparent: 'rgba(108, 93, 211, .6)',
    redTransparent: 'rgba(139,0,0,.6)',
    darkTransparent: '#0000000d',
    secondaryTransparent: 'rgba(63, 140, 255, .6)',
    errorTransparent: 'rgba(255, 117, 76, .6)',
  },
  tableColors: {
    tableColor: 'rgba(36, 39, 49, 0.3)',
    tableWrapper: 'rgb(19, 20, 27, 0.3)',
    tableBorder: 'rgba(255, 255, 255, 0.3)'
  },
  shadows: {
    primary: '0 0 20px rgba(0, 0, 0, 0.2)'
  },
  transitions: {
    primary: '200ms ease-out',
    fast: '50ms ease-out'
  },
  mediaQueries: {
    phone: `(max-width: ${Dimensions.phone}px)`,
    tablet: `(max-width: ${Dimensions.tablet}px) and (min-width: ${Dimensions.phone}px)`,
    pc: `(max-width: ${Dimensions.pc}px) and (min-width: ${Dimensions.tablet}px)`,
    fullHD: `(min-width: ${Dimensions.pc}px`,
    phoneAndTablet: `(max-width: ${Dimensions.tablet}px)`,
    mouseScreen: `(pointer: fine)`,
    touchScreen: `(pointer: coarse)`,
  }
}
