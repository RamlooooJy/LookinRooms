import React, {FC, InputHTMLAttributes, useState} from "react";
import {StyledInput} from "./styled";
import ErrorLine from "./ErrorLine";

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean
  icon?: string
  field?: string
}

const Input: FC<InputI> = ({isFocused, defaultValue, field, icon, placeholder, onSubmit, onChange, ...props}) => {
  const [value, setValue] = useState(Boolean(defaultValue) ? defaultValue : '')
  const [isError, setIsError] = useState(false)
  const onChangeCallback = (ev: any) => {
    if(isError) setIsError(false) /** todo **/
    setValue(ev.target.value)
    onChange && onChange(ev)
  }
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.charCode === 13) {
      onSubmit && onSubmit(event)
    }
  }
  return <StyledInput icon={icon} isError={isError}>
    <input autoFocus={isFocused} data-field={field} onKeyPress={onKeyPress} placeholder={placeholder} value={value} onChange={onChangeCallback} {...props}/>
    {isError && <ErrorLine>Поле {placeholder} не должно быть пустым!</ErrorLine>}
  </StyledInput>
}

export default Input
