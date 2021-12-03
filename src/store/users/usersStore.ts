import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import {makeAutoObservable} from "mobx";
import {KEY} from "../../index";
import {userLoginQuery} from "../../queries/user/userLoginQuery";
import {localStorageProxy} from "../localStorage";
import {USER_LOGIN} from "../../common/enums";
import {UserResultApiT, UserStoreI} from "../../common/dataInterfaces";

class UsersStore {
  private users: UserStoreI = null
  private logged: UserResultApiT | null = localStorageProxy.restore(USER_LOGIN)

  constructor() {
    makeAutoObservable(this)
  }

  get data() {
    return this.users
  }

  get user () {
    return this.logged
  }

  getJWTbyPas(pass: string) {
    if (!KEY) {
      console.error('ERROR PRIVATE KEY WAS NOT FOUND')
      return
    }
    return Base64.stringify(hmacSHA512(pass, KEY));
  }

  logout () {
    localStorageProxy.remove(USER_LOGIN)
    this.logged = null
  }

  * login(data: {login?: string, password?: string}, callback: (isLogged: boolean)=>void) {
    if (!data.login || !data.password) {
      return this.logged || 'not logged'
    } else {
      const encodedPass = this.getJWTbyPas(data.password) || ''
      userLoginQuery(data.login, encodedPass).then(res => {
        if(res) {
          localStorageProxy.save('USER_LOGIN', res)
          this.logged = res
        }
        callback(!!res)
      })
    }
    yield true
  }

  * fetch(name: string = '') {
    // getUserByName(name).then((resolve)=>{
    //   this.users = resolve
    // })
    yield true
  }
}

export const usersStore = new UsersStore()
