import styled from "styled-components";
import {Flex} from "../../Application/globalStyled";

export const StyledModal = styled.div<{isActive: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.darkTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: ${props => props.theme.transitions.primary};
  * {
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`

export const StyledModalContainer = styled.div`
  padding: 35px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 800px;
  border-radius: 16px;
  background: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.shadows.primary};
`
export const StyledInputsContainer = styled.div`
  margin-top: 100px;
`

export const StyledControlsContainer = styled(Flex)`
  
`
