import {GetRequestApi} from "./query";
import {TablesResultApiT} from "../common/dataInterfaces";

export const getTables: (date: string) => Promise<TablesResultApiT> = async (date: string) => {
  if(!date) {
    console.error('need specify the Date')
    return {} as TablesResultApiT
  }
  const result = await GetRequestApi<TablesResultApiT>('getTables', {date})
  const [firstResult] = result.result
  return firstResult || {}
}
