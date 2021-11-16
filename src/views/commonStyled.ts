import styled from "styled-components";

export const StyledTablesMap = styled.div.attrs({title: 'Tables Map'})`
  display: flex;
  align-items: stretch;
  overflow: auto;
  flex-grow: 1;
  margin: 10px;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.primary};
  border-radius: 24px;
  padding: 20px;
  position: relative;
  @media ${props => props.theme.mediaQueries.phoneAndTablet} {
    padding: 5px;
    margin: 0;
  }
`
