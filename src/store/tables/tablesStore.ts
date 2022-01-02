import {makeAutoObservable, runInAction} from "mobx";
import {isEmptyObject} from "../../common/utils";
import {getTables, GetTablesI} from "../../queries/getTables";
import {getLockedTables} from "../../queries/getLockedTables";
import {getReservedTables} from "../../queries/getReservedTables";
import {LockedInfoT, ReservedInfoT, Rooms, TablesInfoResultApiT, TablesResultApiT} from "../../common/dataInterfaces";
import {setLockedTable} from "../../queries/setLockedTable";
import {setReservedTable} from "../../queries/setReservedTable";
import {dateStore} from "../DateStore/DateStore";
import {getTablesInfo} from "../../queries/getTablesInfo";
import {setTablesPricesOnDateQuery} from "../../queries/setTablesPricesOnDateQuery";

interface TablesClassI {
  isPending: boolean
  data: TablesResultApiT
}

class Tables implements TablesClassI {
  timeout: any = null
  isPending = false
  isFrozen = false
  isTablesError = false
  data = {} as TablesResultApiT
  tableInfo = {} as TablesInfoResultApiT

  constructor() {
    makeAutoObservable(this)
  }

  getDataByView(view: Rooms) {
    if (isEmptyObject(this.data)) return null
    return view ? this.data[view] : this.data
  }

  setData(res: GetTablesI) {
    this.isPending = false
    if (!res) {
      this.isTablesError = true
      return
    }
    if (res.message === 'error') {
      this.isTablesError = true
      return
    }
    if (this.isTablesError) {
      this.isTablesError = false
    }
    this.data = res.data || {} as TablesResultApiT
  }

  async fetchTables(force = true, date?: string) {
    clearTimeout(this.timeout)
    this.isPending = force
    getTables(date || dateStore.date).then(this.setData.bind(this)).then(() => {
      this.timeout = setTimeout(() => {
        this.fetchTables(false)
      }, 60000)
    })
  }

  async fetchTablesInfo (force = true, date?: string) {
    getTablesInfo(date || dateStore.date).then((res) => {
      this.tableInfo = res ? res.data : {} as TablesInfoResultApiT
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
    runInAction(() => {
      this.isFrozen = true
    })
    const result = await setLockedTable(data) //.then(this.setData.bind(this))
    runInAction(() => {
      this.data = result
      this.isFrozen = false
    })
    return true
  }

  async reserveTable(data: ReservedInfoT) {
    runInAction(() => {
      this.isFrozen = true
    })
    const result = await setReservedTable(data) //.then(this.setData.bind(this))
    runInAction(() => {
      this.data = result
      this.isFrozen = false
    })
    return true
  }

  async setTablesPricesOnDate(data: TablesInfoResultApiT, date?: string) {
    const result = await setTablesPricesOnDateQuery (data, date || dateStore.date)
    if(result) {
      this.fetchTables()
    }
  }
}

export const tablesStore = new Tables()
