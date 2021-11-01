import {FC} from "react";
import Styled from "./styled";
interface ButtonI {
  className?: string
}

const Button:FC<ButtonI> = ({className, children})=>{
  return <Styled className={className}>
    {children}
  </Styled>
}

export default Button
