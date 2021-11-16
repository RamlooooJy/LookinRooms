import {makeAutoObservable} from "mobx";
import {UserStoreI} from "../../common/interfaces";

class Users {
  private users: UserStoreI | null = null
  constructor() {
    makeAutoObservable(this)
  }

  get data() {
    return this.users
  }

  * fetch(name: string = '') {
    // getUserByName(name).then((resolve)=>{
    //   this.users = resolve
    // })
    yield true
  }
}

export const UsersStore = new Users()
