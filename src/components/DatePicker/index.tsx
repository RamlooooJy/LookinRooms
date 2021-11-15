import React, {FC, useState} from "react";
import Button from "../Button/Button";
import {DropdownContainer, StyledDatePicker } from "./styled";

const DatePicker:FC = ({children})=>{
  const [isActive, setActive] = useState(false)
  const toggleDropdown = () => {
    setActive(!isActive)
  }
  return <StyledDatePicker onClick={toggleDropdown} isActive={isActive}>
    <Button className='flex-bstretch'>
      <span className="text">select</span>
      <div className="icon-dropdown" />
    </Button>
    {
      isActive && <DropdownContainer>
          Data.
      </DropdownContainer>
    }
  </StyledDatePicker>
}

export default DatePicker
