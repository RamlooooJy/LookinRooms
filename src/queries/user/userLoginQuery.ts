import {GetRequestApi} from "../query";
import {UserResultApiT} from "../../common/dataInterfaces";


export const userLoginQuery: (login: string, hash: string) => Promise<UserResultApiT> = async (login, hash) => {
  if(!login || !hash) {
    console.error('need specify data')
    return {} as UserResultApiT
  }
  const result = await GetRequestApi<UserResultApiT>('login', {
    login,
    hash
  })
  const [firstResult] = result.result
  return firstResult || null
}
