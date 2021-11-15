import styled from "styled-components";
import {TableWrapperI} from "../../common/interfaces";
import {Flex} from "../../Application/globalStyled";


export const StyledTableWrapper = styled(Flex).attrs({title: 'Table Wrapper'})<TableWrapperI>`
  //position: absolute;
  background: ${props => props.theme.tableColors.tableWrapper};
  padding: ${props => props.padding || '25px'};
`
