import styled from "styled-components";
import {defaultColors} from "../../widgets/Main/styled";
import arrowRight from '../../assets/img/nav-arrow.svg'

const Styled = styled.button`
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  min-height: 56px;
  border: none;
  margin: 5px 0;
  .text {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .icon {
    //height: 20px;
    width: 20px;
  }
  .icon-right {
    //height: 20px;
    width: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(${arrowRight});
  }
  &:not(.active) {
    color: #808191;
    background: rgba(0,0,0,0.05);
  }
  &.active {
    background: ${defaultColors.primary};
    color: aliceblue;
  }
  
`

export default Styled
