import {GetRequestApi} from "./query";
import {TablesResultApiT} from "../common/dataInterfaces";

export type GetTablesI = {
  data: TablesResultApiT,
  message: string
} | null

export const getTables: (date: string) => Promise<GetTablesI> = async (date: string) => {
  if(!date) {
    console.error('need specify the Date')
    return null
  }
  const result = await GetRequestApi<TablesResultApiT>('getTables', {date})
  const [firstResult] = result.result
  return {
    data: firstResult,
    message: result.query,
  } || null
}
