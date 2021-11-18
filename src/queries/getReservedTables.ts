import {GetRequestApi} from "./query";
import {TablesReservedApiT} from "../common/interfaces";

export const getReservedTables: (date: string) => Promise<TablesReservedApiT> = async (date) => {
  if(!date) {
    console.error('need specify the Date')
    return {} as TablesReservedApiT
  }
  const result = await GetRequestApi<TablesReservedApiT>('getReservedTables', {date})
  const [firstResult] = result.result
  return firstResult || {}
}
