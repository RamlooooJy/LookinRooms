import {makeAutoObservable} from 'mobx'

const today = new Date()
const nearestFridayOrToday = today.getDay() < 5 ? today.getDate() + (5 - today.getDay()) : today.getDate()
export const todayDate = new Date(today.getFullYear(), today.getMonth(), nearestFridayOrToday)

export const normilizeDate = (date: Date) => {
  // время на текущий день считается до 6 утра в день мероприятия
  // пятница считается с 00:00:00
  // суббота считается с 06:00:00
  return date.toLocaleDateString('ru')
}

class DateStore {
  public date: string = normilizeDate(todayDate)

  constructor() {
    makeAutoObservable(this)
  }

  public setDate(date: Date) {
    this.date = normilizeDate(date)
  }
}

export const dateStore = new DateStore()
