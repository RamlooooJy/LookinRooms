import React, {FC} from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import {StyledViewWrapper} from "../commonStyled";
import {TableT} from "../../common/interfaces";
import {observer} from "mobx-react-lite";
import {AbsoluteBorderDoors, Flex} from "../../Application/globalStyled";
import Sign from "../../components/Sign/Sign";

const Shater: FC = observer(() => {
  // useEffect(() => {
  //   UsersStore.fetch()
  // }, [])

  const tables: TableT[] = [
    {id: 12, TableNumber: '21', price: 15000, GuestsAmount: 2, AdditionalGuestAmount: 2},
    {id: 13, TableNumber: '22', price: 15000, GuestsAmount: 2, AdditionalGuestAmount: 2},
    {id: 14, TableNumber: '23', price: 15000, GuestsAmount: 2, AdditionalGuestAmount: 2}
  ]
  const tables2: TableT[] = [
    {id: 12, TableNumber: '4.3', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 13, TableNumber: '4.2', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 16, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  ]
  const tables3: TableT[] = [
    {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  ]
  const tables4: TableT[] = [
    {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
    {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  ]
  // useEffect(()=>{
  //   if(UsersStore.data) console.log(UsersStore)
  // }, [UsersStore.data])
  return (
    <StyledViewWrapper direction={'row'} justify={"space-between"} scale={1}>
      <Flex justify={'space-between'} align={"flex-start"} sizeY={'100%'}>
        <TableWrapper tables={tables}/>
        <TableWrapper reversedTables space={'10'} direction={"row"} tables={tables2}/>
      </Flex>
      <Flex align={"flex-end"}>
        <TableWrapper direction={"row"} tables={tables3} />
        <TableWrapper padding={'0 20px 20px'} reversedTables tables={tables4} />
      </Flex>
      <AbsoluteBorderDoors top={'0'} left={'0'}>
        <Sign>WC</Sign>
      </AbsoluteBorderDoors>
    </StyledViewWrapper>
  )
})
export default Shater


const b =
  {
    "12112021": {
      "Shater": {
        "TableNumber": "1.1",
        "TableInfo": {
          "Room": "ШАТЕР",
          "Price": 6000,
          "AvailableGuestAmount": 2,
          "TotalGuestWithAdditional": 2
        },
        "Guest": {
          "GuestName": "Имя гостя",
          "PhoneNumber": "номер телефона",
          "GuestsAmount": 1
        },
        "Money": {
          "ReceivedMoney": 3000,
          "Debt": 12000
        },
        "Agent": "имя",
        "Promo": "Имя",
        "Date": "число дата в UTC",
        "Type": "ДР/ПРОСТО/Корпорат",
        "Info": "..."
      }
    }
  }
