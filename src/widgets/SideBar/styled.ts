import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 10px 15px;
  flex-grow: 1;
  max-width: 360px;
  min-width: 100px;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  @media ${props => props.theme.media.phoneAndTablet} {
    max-height: 100px;
    flex-direction: row;
    max-width: none;
  }
`
export const StyledControlsContainer = styled.div`
  @media ${props => props.theme.media.phoneAndTablet} {
    display: flex;
    flex-direction: row;
  }
`

