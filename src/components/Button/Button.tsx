import {FC} from "react";
import Styled from "./styled";
interface ButtonI {
  margin?: string
  className?: string
  background?: string
  secondary?: boolean
  toggled?: boolean
  onClick?: ()=>void
  borderColor?: string
}

const Button:FC<ButtonI> = ({onClick, children, ...props})=>{
  return <Styled onClick={onClick} {...props}>
    {children}
  </Styled>
}

export default Button
