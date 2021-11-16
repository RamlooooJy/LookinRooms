import {makeAutoObservable} from "mobx";
import {TableT} from "../../common/interfaces";
import {getTables} from "../../queries/query";

interface TablesStoreI {
  [date: string]: TableT[]
}

class Tables {
  data: TablesStoreI = {}
  constructor() {
    makeAutoObservable(this)
  }
  *fetch () {
    getTables('16.11.2021').then((res)=>{
      this.data = res.reduce((resultData, item)=>resultData[item.Date] = item, {})
    })
  }
}

export const tablesStore = new Tables()
