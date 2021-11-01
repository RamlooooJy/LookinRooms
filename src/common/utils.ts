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
