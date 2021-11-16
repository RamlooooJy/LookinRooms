type queryT = {
  query: string
  result: any[]
}

type Request = (request: string, queryName: string, data: string) => Promise<queryT>

export const GetRequestApi: Request = async (request, queryName, data) => {
  const query = queryName ? `?${queryName}=${data}` : ''
  const url = `http://localhost:3001/${request}${query}`
  let result:any = {}
  try {
    result = await (await fetch(url)).json()
  }
  catch (err) {console.log(err)}
  return result
}

export const getTables: (date: string) => Promise<any[]> = async (date: string) => {
  const result = await GetRequestApi('getTables', 'date', date)
  const [firstResult, ...rest] = result.result
  return result.result

}


