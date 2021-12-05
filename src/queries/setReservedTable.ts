import {PostRequestApi} from "./query";
import {ReservedInfoT, TablesResultApiT} from "../common/dataInterfaces";

export const setReservedTable: (date: ReservedInfoT) => Promise<TablesResultApiT> = async (data) => {
  if(!data) {
    console.error('need specify the Date')
    return {} as TablesResultApiT
  }
  const result = await PostRequestApi<TablesResultApiT>('reserveTheTable', data)
  const [firstResult] = result.result
  return firstResult || {}
}
