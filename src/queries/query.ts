import {REQUEST_URL} from "../index";

type QueryT<T> = {
  query: string
  result: T[]
}
//Omit<TablesResultApiT, "Date"> exclude some data from interface
//Pick<TablesResultApiT, "Shater" | "Vip"> Takes only params from the right arguments
//keyof TablesResultApiT


export const GetRequestApi = async <M>(request: string, data: any): Promise<QueryT<M>> => {
  let query:string = Object.keys(data).map(key=>`${key}=${data[key]}`).join('&')
  const url = `${REQUEST_URL}${request}?${query}`

  let result = {query: 'error', result: []} as QueryT<M>
  try {
    result = await (await fetch(url)).json()
  } catch (err) {
    console.error('Error query, Something gone on server side!!!\n\n', err)
  }
  return result
}

export const PostRequestApi = async <M>(request: string, data: any): Promise<QueryT<M>> => {
  let query:string = Object.keys(data).map(key=>`${key}=${data[key]}`).join('&')
  const url = `${REQUEST_URL}${request}?${query}`

  let result = {query: 'error', result: []} as QueryT<M>
  console.log(data)
  try {
    result = await (await fetch(url, {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })).json()
  } catch (err) {
    console.error('Error query, Something gone on server side!!!\n\n', err)
  }
  return result
}



