import styled from "styled-components";
import {Flex} from "../Application/globalStyled";


export const StyledTablesMap = styled.div.attrs({title: 'Tables Map'})`
  display: flex;
  align-items: stretch;
  overflow: auto;
  flex-grow: 1;
  margin: 10px;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.primary};
  border-radius: 24px;
`

export const StyledViewWrapper = styled(Flex).attrs({title: 'Wrapper'})<{ scale?: number }>`
  position: relative;
  flex-grow: 1;
  background: ${({theme}) => theme.tableColors.tableColor};;
  margin: 20px;
  border: 10px solid ${({theme}) => theme.colors.gray};
  border-radius: 16px;
  box-shadow: ${({theme}) => theme.shadows.primary};
  //min-width: 600px;
  transform: scale(${({scale}) => scale});
  transform-origin: top left;
`
