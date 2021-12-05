import {makeAutoObservable, runInAction} from "mobx";
import {isEmptyObject} from "../../common/utils";
import {getTables} from "../../queries/getTables";
import {getLockedTables} from "../../queries/getLockedTables";
import {getReservedTables} from "../../queries/getReservedTables";
import {LockedInfoT, ReservedInfoT, Rooms, TablesResultApiT} from "../../common/dataInterfaces";
import {setLockedTable} from "../../queries/setLockedTable";
import {setReservedTable} from "../../queries/setReservedTable";
import {dateStore} from "../DateStore/DateStore";

interface TablesClassI {
  isPending: boolean
  data: TablesResultApiT
}

class Tables implements TablesClassI {
  timeout: any = null
  isPending = false
  isFrozen = false
  data = {} as TablesResultApiT

  constructor() {
    makeAutoObservable(this)
  }

  getDataByView(view: Rooms) {
    if (isEmptyObject(this.data) || !view) return null
    return this.data[view]
  }

  setData(res: TablesResultApiT) {
    this.isPending = false
    if (isEmptyObject(res)) {
      this.data = {} as TablesResultApiT
      return
    }
    this.data = res
  }

  async fetchTables(force= true, date?: string) {
    clearTimeout(this.timeout)
    this.isPending = force
    getTables(date || dateStore.date).then(this.setData.bind(this)).then(()=>{
      this.timeout = setTimeout(()=>{
        this.fetchTables(false)
      }, 5000 )
    })
  }

  * fetchLockedTables(date: string) {
    getLockedTables(date)//.then(this.setData.bind(this))
    yield true
  }

  * fetchReservedTables(date: string) {
    getReservedTables(date) //.then(this.setData.bind(this))
    yield true
  }

  async freezeTable(data: LockedInfoT) {
    runInAction(()=>{this.isFrozen = true})
    const result = await setLockedTable(data) //.then(this.setData.bind(this))
    runInAction(()=>{
      this.data = result
      this.isFrozen = false
    })
    return true
  }

  async reserveTable(data: ReservedInfoT) {
    runInAction(()=>{this.isFrozen = true})
    const result = await setReservedTable(data) //.then(this.setData.bind(this))
    runInAction(()=>{
      this.data = result
      this.isFrozen = false
    })
    return true
  }
}

export const tablesStore = new Tables()
