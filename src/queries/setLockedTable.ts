import {PostRequestApi} from "./query";
import {LockedInfoT, TablesResultApiT} from "../common/dataInterfaces";

export const setLockedTable: (date: LockedInfoT) => Promise<TablesResultApiT> = async (data) => {
  if(!data) {
    console.error('need specify the Date')
    return {} as TablesResultApiT
  }
  console.log(data)
  const result = await PostRequestApi<TablesResultApiT>('lockTheTable', data)
  const [firstResult] = result.result
  return firstResult || {}
}
