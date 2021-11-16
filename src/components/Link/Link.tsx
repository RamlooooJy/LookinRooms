import React from "react";
import {FC} from "react";
import {useHistory} from "react-router-dom";
import {goTo} from "../../router/utils";
import { StyledLink } from "./styled";

interface LinkI {
  path?: string
  onClick?: (e:any)=>void
}

export const Link:FC<LinkI> = ({path , onClick, children})=>{
  const history = useHistory()
  const redirect = (e: any)=> {
    e.preventDefault()
    onClick && onClick(e)
    if (path) {
      goTo(path || history.location.pathname, history)
    }
  }
  return <StyledLink href={`/#${path || history.location.pathname}`} onClick={redirect}>
    {children}
  </StyledLink>
}
