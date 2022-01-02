import {GetRequestApi} from "./query";
import {TablesInfoResultApiT, TablesResultApiT} from "../common/dataInterfaces";

export type GetTablesInfoI = {
  data: TablesInfoResultApiT,
  message: string
} | null

export const getTablesInfo: (date: string) => Promise<GetTablesInfoI> = async (date: string) => {
  if(!date) {
    console.error('need specify the Date')
    return null
  }
  const result = await GetRequestApi<TablesResultApiT>('getTablesInfo', {date})
  const [firstResult] = result.result
  return {
    data: firstResult,
    message: result.query,
  } || null
}
