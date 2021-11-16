import React, {FC, useState} from "react";
import { StyledInput } from "./styled";
import ErrorLine from "./ErrorLine";

interface I {
  placeholder: string,
  icon?: string
}

const Default:FC<I> = ({icon, placeholder})=>{
  const [value, setValue] = useState('')
  const [isError, setError] = useState(false)
  const change = (e:any) => {
    const inputValue = e.target.value
    if(inputValue.length > 5 && isError) {
      setError(false)
    }
    setValue(inputValue)
  }
  const onBlur = () => {
    if(value.length <= 5 && !isError) {
      setError(true)
    }
  }
  return <StyledInput icon={icon} isError={isError}>
    <input placeholder={placeholder} value={value} onChange={change} onBlur={onBlur} />
    {isError && <ErrorLine>Поле {placeholder} не должно быть пустым!</ErrorLine>}
  </StyledInput>
}

export default Default
