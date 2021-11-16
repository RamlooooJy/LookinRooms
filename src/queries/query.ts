import {UserStoreI} from "../common/interfaces";

type queryT = {
  query: string,
  result: UserStoreI
}


export const getUserByName: (userName: string) => Promise<UserStoreI> = async (userName: string) => {
  const query = userName ? `?username=${userName}` : ''
  const url = `http://localhost:3001/getUser${query}`
  let data:any = {}
  try {
    data = await (await fetch(url)).json() as queryT
  }
  catch (err) {console.log(err)}
  return data.result
}



