import React, {FC} from "react";
import {Link} from "../Link/Link";
import {StyledLogo} from "./styled";
import imgLarge from "../../assets/img/LOGO_BIG.png"
import imgPhone from "../../assets/img/look-phone-logo.png"

export interface LogoI {
  little?: boolean
  onClick?: (e:any)=>void
  fullWidth?: boolean
}

const Logo:FC<LogoI> = ({onClick, ...props})=>{
  return <Link onClick={onClick}>
    <StyledLogo {...props} src={props.little ? imgPhone : imgLarge}/>
  </Link>
}

export default Logo
