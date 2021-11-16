import styled from "styled-components";
import {Flex} from "../../Application/globalStyled";

export const StyledViewWrapper = styled(Flex).attrs({title: 'Wrapper'})<{ scale?: number }>`
  position: relative;
  flex-grow: 1;
  background: ${({theme}) => theme.tableColors.tableColor};;
  border: 10px solid ${({theme}) => theme.colors.gray};
  box-shadow: ${({theme}) => theme.shadows.primary};
  //min-width: 600px;
  transform: scale(${({scale}) => scale});
  transform-origin: top left;
`
