import {GetRequestApi} from "./query";
import {TablesLockedResultApiT} from "../common/dataInterfaces";

export const getLockedTables: (date: string) => Promise<TablesLockedResultApiT> = async (date: string) => {
  if(!date) {
    console.error('need specify the Date')
    return {} as TablesLockedResultApiT
  }
  const result = await GetRequestApi<TablesLockedResultApiT>('getLockedTables', {date})
  const [firstResult] = result.result
  return firstResult || {}
}
