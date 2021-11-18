import {v4 as u} from 'uuid';

export const debounce = (func: any, ms = 500) => {
  let timer: any
  return (...args: any) => {
    if (!timer || !ms) {
      timer = setTimeout(() => {
        timer = null
      }, ms)
      func.apply(this, args)
    }
  }
}
export const isEmptyObject = (obj: Object) => {
  return Object.keys(obj).length === 0
}
export const uid = () => {
  return u()
}
