import styled, {css} from "styled-components";
import {Flex} from "../../Application/globalStyled";

type tableSizeT = 's1' | 's2' | 's3'
const tableSizes = {
  pc: {
    s1: {
      width: 100,
      height: 100,
    },
    s2: {
      width: 140,
      height: 100,
    },
    s3: {
      width: 180,
      height: 140,
    }
  },
  // mobile: {
  //   s1: 50,
  //   s2: 80,
  //   s3: 120,
  // },
}

export const StyledTable = styled.div<{margin: string, reversedTable?:boolean, tableNumber: string, active: boolean, tableSize: tableSizeT}>`
  cursor: pointer;
  display: flex;
  width: ${p =>  p.reversedTable ? tableSizes.pc[p.tableSize].height : tableSizes.pc[p.tableSize].width}px;
  height: ${p => p.reversedTable ? tableSizes.pc[p.tableSize].width : tableSizes.pc[p.tableSize].height}px;
  font-size: 16px;
  transition: ${props => props.theme.transitions.fast};
  overflow: visible;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  margin: ${({margin})=>margin || 'initial'}};

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '${({tableNumber}) => tableNumber}';
    transition: ${props => props.theme.transitions.fast};
    border-radius: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.tableColors.tableColor};
    width: 80%;
    height: 80%;
    border: 1px solid ${props => props.theme.tableColors.tableBorder};
    font-size: 24px;
  }

  ${({active, theme}) => {
    return active && css`&:before {
      background: ${theme.colors.secondaryTransparent};

      div {
        background: ${theme.colors.secondaryTransparent};
      }`
  }}
  &:hover {
    :before {
      background: ${props => props.theme.colors.secondaryTransparent};
    }

    div {
      background: ${props => props.theme.colors.secondary};
      opacity: 0.6;
    }
  }
`
