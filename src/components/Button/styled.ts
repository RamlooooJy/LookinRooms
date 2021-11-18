import styled, {css} from "styled-components";
import arrowRight from '../../assets/img/nav-arrow.svg'
import {ButtonI} from "./Button";

const Styled = styled.button.attrs({title: 'Button'})<ButtonI>`
  font-weight: 600;
  cursor: ${props=>props.disabled ? 'default' :  'pointer'};
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  min-height: 56px;
  margin:${({margin})=>margin || '5px 0'};
  border: ${(props) => props.borderColor ? css`2px solid ${props.borderColor}` : 'none'};
  .text {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .icon {
    min-height: 20px;
    width: 20px;
  }

  .icon-right {
    min-height: 20px;
    width: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(${arrowRight});
  }

  ${({secondary, toggled, background, disabled}) => toggled
          ? css`
            &:not(.active) {
              color: ${(props) => props.theme.colors.fontSmooth};
              background: ${(props) => props.theme.colors.darkTransparent};
            }

            &.active {
              background: ${(props) => background || props.theme.colors.primary};
              color: ${(props) => props.theme.colors.fontCommon};
            }
          `
          : secondary ? css`
                    color: ${(props) => props.theme.colors.fontCommon};
                    background: ${(props) => disabled ? props.theme.colors.secondaryTransparent : props.theme.colors.secondary};
                  `
                  : css`
                    color: ${(props) => props.theme.colors.fontCommon};
                    background: ${(props) => disabled? props.theme.colors.gray : props.theme.colors.darkTransparent};
                  `
  }`

export default Styled
