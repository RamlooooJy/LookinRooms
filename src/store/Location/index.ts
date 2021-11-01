import {action, computed, makeObservable, observable} from 'mobx'


class Location {
  public path: string = '/'

  constructor() {
    makeObservable<Location>(this, {
      path: observable,
      setPath: action,
      currentPath: computed
    })
  }

  setPath (newPath: string) {
    if(this.path != newPath) {
      this.path = newPath
    }
  }

  currentPath () {
    return this.path
  }
}

export default new Location()
