import styled, {css} from "styled-components";
import {LockedInfoT, ReservedInfoT, TableComponentI} from "../../common/interfaces";

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
  mob: {
    s1: {
      width: 50,
      height: 50,
    },
    s2: {
      width: 70,
      height: 50,
    },
    s3: {
      width: 90,
      height: 70,
    }
  },
}

type StyledTableT = {
  margin: string,
  active: boolean,
  tableNumber: string,
  tableSize: tableSizeT,
  reversedTable?: TableComponentI["reversedTable"],
  frizzed: LockedInfoT | null
  reserved: ReservedInfoT | null
}


export const StyledTable = styled.div<StyledTableT>`
  cursor: pointer;
  display: flex;
  width: ${p => p.reversedTable ? tableSizes.pc[p.tableSize].height : tableSizes.pc[p.tableSize].width}px;
  height: ${p => p.reversedTable ? tableSizes.pc[p.tableSize].width : tableSizes.pc[p.tableSize].height}px;
  font-size: 16px;
  transition: ${props => props.theme.transitions.fast};
  overflow: visible;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  margin: ${({margin}) => margin || 'initial'};
  ${props => (props.frizzed || props.reserved) && css`pointer-events: none;`}
  ${props => (props.reserved) && css`opacity: .4;`}

}

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
  background: ${({frizzed, reserved, theme}) => {
    if(reserved) return theme.colors.primaryTransparent
    if(frizzed) return theme.colors.redTransparent
    return theme.tableColors.tableColor
  }};
  width: 80%;
  height: 80%;
  border: 1px solid ${props => props.frizzed ? props.theme.tableColors.tableColor : props.theme.tableColors.tableBorder};
  font-size: 24px;
}

${({active, theme}) => {
  return active && css`
    &:before {
      background: ${theme.colors.secondaryTransparent};
    }

    div {
      background: ${theme.colors.secondaryTransparent};
    }
  `
}}


@media (pointer: fine) {
  &:hover {
    :before {
      background: ${props => props.theme.colors.secondaryTransparent};
    }

    div {
      background: ${props => props.theme.colors.secondary};
      opacity: 0.6;
    }
  }
}

@media ${props => props.theme.mediaQueries.phoneAndTablet} {
  width: ${p => p.reversedTable ? tableSizes.mob[p.tableSize].height : tableSizes.mob[p.tableSize].width}px;
  height: ${p => p.reversedTable ? tableSizes.mob[p.tableSize].width : tableSizes.mob[p.tableSize].height}px;
  &:before {
    font-size: 1rem;
  }
}
`
