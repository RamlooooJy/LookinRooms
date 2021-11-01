import {FC} from "react";
import {Link} from "../Link/Link";
import {defaultRoutes} from "../../router/defaultRoutes";
import React from "react";
import { StyledLogo } from "./styled";

const Logo:FC = ()=>{
  return <Link path={defaultRoutes[0].path}>
    <StyledLogo />
  </Link>
}

export default Logo
