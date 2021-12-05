/**
 *
 *
 * USERS
 *
 *
 * */
type TableReason = 'ДР' | 'КОРПОРАТ' | 'Просрать бабки и подкатить к девочкам'

export type UserResultApiT = {
  Hash: string,
  Login: string,
  Role: "ADMIN" | "AGENT" | "PROMO",
  RegistrationDate: string,
  Fio: string,
  Phone: string,
  Instagram: string,
  Promo: string,
}

export type UserStoreI = UserResultApiT[] | null


/**
 *
 *
 * TABLES
 *
 *
 * */
export type Rooms = 'Shater' | 'Main' | 'Vip' | ''

type TableInfoT = {
  Price: number,
  AvailableGuestAmount: number,
  TotalGuestWithAdditional: number
}
export type LockedInfoT = {
  Agent: ReservedInfoT["Agent"]
  Expired: string
  Date: string
  Info: string
  TableNumber: string
}
export type ReservedInfoT = {
  TableNumber: string
  Date: string
  Type: TableReason
  Info: string
  Agent: {
    Name: string
    Phone: string
    Promo: string
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

export type TablesResultApiT = {
  Date: string
  Shater: RoomItemT[]
  Main: RoomItemT[]
  Vip: RoomItemT[]
  // todo ////// soon
  // Izvestia: any[]
}

export type TablesLockedResultApiT = LockedInfoT
export type TablesReservedApiT = ReservedInfoT
export type RoomItemT = {
  TableNumber: string,
  TableInfo: TableInfoT
  Locked: LockedInfoT | null
  Reserved: ReservedInfoT | null
}
