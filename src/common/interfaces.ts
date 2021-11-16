import {FlexI} from "../Application/globalStyled";

export interface DefaultComponent {
  isCompact?: boolean
  size?: number
}

/**
 *
 * Tables
 *
 * */
export type ChairT = 'default' | 'more' | 'active'

export type TableT = {
  id: number
  price: number
  // MONGO DATA
  GuestName?: string
  TableNumber: string
  Agent?: string
  Promo?: string
  Price?: number
  Date?: string
  Type?: string
  PhoneNumber?: string
  GuestsAmount: number
  AdditionalGuestAmount?: number
}

export interface TableComponentI {
  data: TableT
  // isModalActive: boolean
  // onClick?: (data: TableT)=>void
  space?: string
  isLast?: boolean
  inline?: boolean
  reversedTable?: boolean
}

export interface TableWrapperI extends FlexI {
  tables: TableT[]
  padding?: string
  space?: string
  reversedTables?: boolean
}

/**
 *
 * USERS DATA
 *
 *
 * */

type UserT = {
  name: string,
  role: "ADMIN" | "AGENT" | "PROMO",
  registrationDate: Date
}

export type UserStoreI = UserT[]

/**
 *
 * TABLE DATA
 *
 * */
export type TableReason = 'ДР' | 'КОРПОРАТ' | 'Просрать бабки и подкатить к девочкам'

export type TablesData = {

}

