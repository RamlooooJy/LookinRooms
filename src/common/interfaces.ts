import {FlexI} from "../Application/globalStyled";

export interface DefaultComponent {
  isCompact?: boolean
  size?: number
}
export type ChairT = 'default' | 'more'

export type TableReason = 'ДР' | 'КОРПОРАТ' | 'Просрать бабки и подкатить к девочкам'

/**
 *
 * Tables
 *
 * */

type TableInfoT = {
  Price: number,
  AvailableGuestAmount: number,
  TotalGuestWithAdditional: number
}
export type LockedInfoT = {
  Agent: string
  Date: string
  Expired: string
  Info: string
  Phone: string
  TableNumber: string
}
export type ReservedInfoT = {
  Agent: string
  Date: string
  Expired: string
  Info: string
  Phone: string
  TableNumber: string
}
export type RoomItemT = {
  TableNumber: string,
  TableInfo: TableInfoT
  Locked: LockedInfoT | null
  Reserved: ReservedInfoT | null
}
export type Rooms = 'Shater' | 'Main' | 'Vip'
export type TablesResultApiT = {
  Date: string
  Shater: RoomItemT[]
  Main: RoomItemT[]
  Vip: RoomItemT[]
  // soon
  // Izvestia: any[]
}
export type TablesLockedResultApiT = LockedInfoT
export type TablesReservedApiT = {
  TableNumber: string
  Date: string
  Type: TableReason
  Info: string
  Agent: {
    Name: string
    Promo: string
    Phone: string
  },
  Guest: {
    GuestName: string
    PhoneNumber: string
    GuestsAmount: number
  },
  Money: {
    ReceivedMoney: number
    Debt: string | "Высчитать уже там где надо выводить с учетом цены стола и полученных денег"
  }
}

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

/**
 *
 * USERS DATA
 *
 *
 * */

export type UserResultApiT = {
  Hash: string,
  Login: string,
  Role: "ADMIN" | "AGENT" | "PROMO",
  RegistrationDate: string,
  Fio: string,
  Phone: string,
  Instagram: string,
}

export type UserStoreI = UserResultApiT[]

/**
 *
 * TABLE DATA
 *
 * */



