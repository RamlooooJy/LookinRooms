import {FC} from "react";
import Styled from "./styled";
export interface ButtonI {
  margin?: string
  className?: string
  background?: string
  secondary?: boolean
  toggled?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>)=>void
  borderColor?: string
  disabled?: boolean
  type?: 'submit'
}

const Button:FC<ButtonI> = ({onClick, children, ...props})=>{
  return <Styled disabled={props.disabled} onClick={onClick} {...props}>
    {children}
  </Styled>
}

export default Button
