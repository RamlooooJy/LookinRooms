import styled from "styled-components";
import img from '../../assets/img/dropdown.svg'

export const StyledDatePicker = styled.div<{ isActive: boolean }>`
  .icon-dropdown {
    width: 15px;
    background: url("${img}") no-repeat center / contain;
    transition: 200ms ease-out;
    transform: ${(props) => props.isActive ? `rotate(-180deg)` : ''};
  }
`

export const DropdownContainer = styled.div`

`
