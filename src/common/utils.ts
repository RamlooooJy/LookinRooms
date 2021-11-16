import { v4 as u } from 'uuid';
import {Dimensions} from "../Application/globalStyled";

export const debounce = (func:any) => {
  let timer:any
  return (...args:any)=>{
    if(!timer) {
      timer = setTimeout(()=>{
        timer = null
      }, 500)
      func.apply(this, args)
    }
  }
}
export const uid = () => {
  return u()
}

export const isMobile = () => {
  return window.innerWidth < Dimensions.tablet
}
