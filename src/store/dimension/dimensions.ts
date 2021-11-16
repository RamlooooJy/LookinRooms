import {makeAutoObservable} from "mobx";
import {debounce} from "../../common/utils";


export class Dimensions {
  private sizeX = window.innerWidth
  private sizeY = window.innerHeight
  constructor() {
    makeAutoObservable(this)
    window.addEventListener('resize', debounce(()=>this.updateSize(window.innerWidth, window.innerHeight), 0))
  }

  updateSize(width: number, height: number) {
    this.sizeX = width
    this.sizeY = height
  }

  get width () {
    return this.sizeX
  }
  get height () {
    return this.sizeY
  }
}

export const dimensions = new Dimensions()
