import styled from "styled-components";


export const StyledSign = styled.div<{transform?: string}>`
  background: ${props=>props.theme.colors.silver};
  padding: 0 20px;
  border-radius: 30px;
`
