const tablet = 1200
export const StaticDimensions = {
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
    transparent: 'rgba(40,44,52,0.38)',
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
    phone: `(max-width: ${StaticDimensions.phone}px)`,
    tablet: `(max-width: ${StaticDimensions.tablet}px) and (min-width: ${StaticDimensions.phone}px)`,
    pc: `(max-width: ${StaticDimensions.pc}px) and (min-width: ${StaticDimensions.tablet}px)`,
    fullHD: `(min-width: ${StaticDimensions.pc}px`,
    phoneAndTablet: `(max-width: ${StaticDimensions.tablet}px)`,
    mouseScreen: `(pointer: fine)`,
    touchScreen: `(pointer: coarse)`,
  }
}
