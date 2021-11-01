import {FC} from "react";
import {useHistory} from "react-router-dom";
import {goTo} from "../../router/utils";

interface LinkI {
  path: string
}

export const Link:FC<LinkI> = ({path, children})=>{
  const history = useHistory()
  const redirect = (e: any)=> {
    e.preventDefault()
    goTo(path, history)
  }
  return <a href={`/#${path}`} onClick={redirect}>
    {children}
  </a>
}
