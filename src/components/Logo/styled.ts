import styled from "styled-components";


export const StyledLogo = styled.img<{ little?: boolean }>`
  height: ${({little}) => little ? 160 : 65}px;
`
