import styled from "styled-components";
import img from '../../assets/img/dropdown.svg'

export const StyledDatePicker = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  .icon-dropdown {
    width: 15px;
    background: url("${img}") no-repeat center / contain;
    transition: 200ms ease-out;
    transform: ${(props) => props.isActive ? `rotate(-180deg)` : ''};
  }
`

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-100%);
`
