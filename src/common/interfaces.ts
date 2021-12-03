import {FlexI} from "../Application/globalStyled";
import {RoomItemT} from "./dataInterfaces";

export type ViewI = {
  data: RoomItemT[]
}

export interface DefaultComponent {
  isCompact?: boolean
  size?: number
}

export type ChairT = 'default' | 'more'

type ReversedTables = boolean | string[]

export interface TableWrapperI extends FlexI {
  tables: RoomItemT[]
  padding?: string
  space?: string
  reversedTables?: ReversedTables
}

export interface TableComponentI {
  data: RoomItemT
  // isModalActive: boolean
  // onClick?: (data: TableT)=>void
  space?: string
  isLast?: boolean
  inline?: boolean
  reversedTable?: ReversedTables
}
