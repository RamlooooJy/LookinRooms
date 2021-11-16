import {action, flow, makeObservable, observable} from "mobx";
import {TableT} from "../../common/interfaces";

interface TablesStoreI {
  [date: string]: TableT[]
}

class Tables {
  data: TablesStoreI = {}
  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
      fetch: flow
    })
  }
  getData () {
    console.log('?')
  }
  *fetch () {

  }
}

export const tables = new Tables()
