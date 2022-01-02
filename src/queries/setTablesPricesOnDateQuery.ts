import {PostRequestApi} from "./query";
import {TablesInfoResultApiT} from "../common/dataInterfaces";

export const setTablesPricesOnDateQuery: (data: TablesInfoResultApiT, date: string) => Promise<any> = async (data, date) => {
  if(!data) {
    console.error('need specify the Date')
    return false
  }
  const result = await PostRequestApi<boolean>('setTablesPricesOnDate', {
    ...data,
    Date: date
  })
  return result.result
}
