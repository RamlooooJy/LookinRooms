import {makeAutoObservable} from 'mobx'

class DateStore {
  public date: string = new Date().toLocaleDateString()

  constructor() {
    makeAutoObservable(this)
  }

  private normilizeDate(date: Date) {
    // время на текущий день считается до 6 утра в день мероприятия
    // пятница считается с 00:00:00
    // суббота считается с 06:00:00
    const normalized = new Date (new Date(date).getTime() - 21600000)
    if(new Date(date).getDay() === 5) return new Date(date).toLocaleDateString()
    return normalized.toLocaleDateString()
  }

  public setDate(date: Date) {
    this.date = this.normilizeDate(date)
  }

}

export const dateStore = new DateStore()
