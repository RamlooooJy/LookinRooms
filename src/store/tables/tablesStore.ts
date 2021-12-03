import {makeAutoObservable} from "mobx";
import {isEmptyObject} from "../../common/utils";
import {getTables} from "../../queries/getTables";
import {getLockedTables} from "../../queries/getLockedTables";
import {getReservedTables} from "../../queries/getReservedTables";
import {Rooms, TablesResultApiT} from "../../common/dataInterfaces";

interface TablesClassI {
  isPending: boolean
  data: TablesResultApiT
}

class Tables implements TablesClassI {
  isPending = false
  data = {} as TablesResultApiT
  constructor() {
    makeAutoObservable(this)
  }

  getDataByView(view:Rooms) {
    if(isEmptyObject(this.data) || !view) return null
    return this.data[view]
  }

  setData(res: TablesResultApiT) {
    this.isPending = false
    if(isEmptyObject(res)) {
      this.data = {} as TablesResultApiT
      return
    }
    this.data = res
  }

  * fetchTables(date: string) {
    this.isPending = true
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
