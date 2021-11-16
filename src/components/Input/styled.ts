import styled from "styled-components";
import img from '../../assets/img/nav-arrow.svg'

export const StyledInput = styled.div<{ icon?: string, isError?: boolean }>`
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  input {
    box-sizing: border-box;
    position: relative;
    border: none;
    border-bottom: 1px solid ${({isError, theme}) => isError ? theme.colors.error : 'transparent'};
    width: 100%;
    height: 60px;
    padding: 22px 22px 22px 66px;
    background-color: #373A43;
    border-radius: 16px;
    font-size: 18px;
    color: ${props => props.theme.colors.fontCommon};
    background-repeat: no-repeat;
    background-position: 20px center;
    background-image: url(${img});
  }
`
export const StyledError = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 15px;
  color: ${props => props.theme.colors.error};
  display: flex;
  align-items: center;
  border-radius: 16px;
`
