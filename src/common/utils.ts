import {v4 as u} from 'uuid';
import {RoomItemT} from "./dataInterfaces";

// common
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

export const writeDataIntoObject = (field: string = '', dataItem: string, data: any) => {
  for (const key in data) {
    if(typeof data[key] === 'object') {
      writeDataIntoObject(field, dataItem, data[key])
    }else{
      if(field === key) {
        data[key] = dataItem
      }
    }
  }
}

/**
*
 * by data
*
* */
export const findTablesByNumbers = (tables: string[], data: RoomItemT[]) => {
  return data && (tables.map(num => data.find(table=>table.TableNumber === num)) || []) as RoomItemT[]
}
