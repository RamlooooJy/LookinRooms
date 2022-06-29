import {PostRequestApi} from "./query";
import {TablePricesT} from "../common/dataInterfaces";

export const setTablesPricesOnDateQuery: (data: TablePricesT[], date: string) => Promise<any> = async (data, date) => {
  if(!data) {
    console.error('need specify the Date')
    return false
  }
  const result = await PostRequestApi<boolean>('setTablesPricesOnDate', {
    Tables: data,
    Date: date,
    FullTime: new Date().toISOString()
  })
  return result.result
}
