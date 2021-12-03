import styled from "styled-components";

export const StyledDatePicker = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100%;
  }
  button {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    border: none;
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: #373A43;
    border-radius: 16px;
    font-size: 24px;
    color: ${props => props.theme.colors.fontCommon};
    background-repeat: no-repeat;
  }
`
