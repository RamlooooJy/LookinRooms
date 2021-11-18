import {makeAutoObservable} from "mobx";
import {isEmptyObject} from "../../common/utils";
import {getTables} from "../../queries/getTables";
import {Rooms, TablesResultApiT} from "../../common/interfaces";
import {getLockedTables} from "../../queries/getLockedTables";
import {getReservedTables} from "../../queries/getReservedTables";

interface TablesClassI {
  isPanding: boolean
  data: TablesResultApiT
}

class Tables implements TablesClassI {
  isPanding = false
  data = {} as TablesResultApiT
  constructor() {
    makeAutoObservable(this)
  }

  getDataByView(view:Rooms) {
    if(isEmptyObject(this.data)) return null
    return this.data[view]
  }

  setData(res: TablesResultApiT) {
    if(isEmptyObject(res)) return
    this.data = res
  }

  * fetchTables(date: string) {
    getTables(date).then(this.setData.bind(this))
    yield true
  }

  * fetchLockedTables(date: string) {
    getLockedTables(date)//.then(this.setData.bind(this))
    yield true
  }

  * fetchReservedTables(date: string) {
    getReservedTables(date) //.then(this.setData.bind(this))
    yield true
  }
}

export const tablesStore = new Tables()
