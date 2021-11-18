import React, {FC, InputHTMLAttributes, KeyboardEventHandler, SyntheticEvent, useState} from "react";
import {StyledInput} from "./styled";
import ErrorLine from "./ErrorLine";

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

const Input: FC<InputI> = ({icon, placeholder, onSubmit, onChange, ...props}) => {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)
  const onChangeCallback = (ev: any) => {
    console.log(ev.target.name)
    setValue(ev.target.value)
    onChange && onChange(ev)
  }
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.charCode === 13) {
      onSubmit && onSubmit(event)
    }
  }
  return <StyledInput icon={icon} isError={isError}>
    <input onKeyPress={onKeyPress} placeholder={placeholder} value={value} onChange={onChangeCallback} {...props}/>
    {isError && <ErrorLine>Поле {placeholder} не должно быть пустым!</ErrorLine>}
  </StyledInput>
}

export default Input
