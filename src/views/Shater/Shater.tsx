import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Absolute, Flex} from "../../Application/globalStyled";
import Sign from "../../components/Sign/Sign";
import CommonWrapper from "../../components/CommonWrapper/CommonWrapper";
import {tablesStore} from "../../store/tables/tablesStore";
import Spinner from "../../components/BackgroundSpinner/BackgroundSpinner";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import {RoomItemT} from "../../common/interfaces";

const Shater: FC = observer(() => {
  const data = tablesStore.getDataByView('Shater')
  if(!data) return <Spinner/>
  const tables1 = ['1.3', '1.2', '1.1'].map(num => data.find(table=>table.TableNumber === num)) as RoomItemT[]
  const tables2 = ['4.3', '4.2', '4.1', '3.2', '3.1'].map(num => data.find(table=>table.TableNumber === num)) as RoomItemT[]
  const tables3 = ['2.1', '2.2'].map(num => data.find(table=>table.TableNumber === num)) as RoomItemT[]
  const tables4 = ['2.3', '2.4'].map(num => data.find(table=>table.TableNumber === num)) as RoomItemT[]

  return (
    <CommonWrapper direction={'row'} justify={"space-between"}>
      <Flex justify={'space-between'} align={"flex-start"} sizeY={'100%'}>
        <TableWrapper tables={tables1}/>
        <TableWrapper reversedTables={['3.2', '3.1']} space={'10'} direction={"row"} tables={tables2}/>
      </Flex>
      <Flex align={"flex-end"}>
        <TableWrapper direction={"row"} tables={tables3}/>
        <TableWrapper padding={'0 20px 20px'} reversedTables tables={tables4}/>
      </Flex>
      <Absolute top={'0'} left={'0'}>
        <Sign>WC</Sign>
      </Absolute>
    </CommonWrapper>
  )
})
export default Shater




// const bron = [
//   {
//     "TableNumber": "1.1",
//     "Date": "16.11.2021",
//     "Type": "TableReason",
//     "Info": "надо привести ш**юх",
//     "Agent": {
//       "Name": "Имя агента",
//       "Promo": "Кто промик",
//       "Phone": "Номер агента"
//     },
//     "Guest": {
//       "GuestName": "Имя гостя",
//       "PhoneNumber": "Номер телефона",
//       "GuestsAmount": 1
//     },
//     "Money": {
//       "ReceivedMoney": 3000,
//       "Debt": "Высчитать уже там где надо выводить с учетом цены стола и полученных денег"
//     }
//   }
// ]
//
// const closed = [
//   {
//     "TableNumber": "1.1",
//     "Date": "16.11.2021",
//     "Expired": "Время когда закончится заморозка стола (+/- 15-20 минут)",
//     "Agent": "имя",
//     "Phone": "Телефон агента чтобы дать по голове",
//     "Info": "Клиент думает"
//   }
// ]
//
//
// const tables =
//   {
//     "Shater": [
//       {
//         "TableNumber": "1.1",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 2
//         }
//       },
//       {
//         "TableNumber": "1.2",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 2
//         }
//       },
//       {
//         "TableNumber": "1.3",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "2.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 6,
//           "TotalGuestWithAdditional": 8
//         }
//       },
//       {
//         "TableNumber": "2.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 6,
//           "TotalGuestWithAdditional": 8
//         }
//       },
//       {
//         "TableNumber": "2.3",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 6
//         }
//       },
//       {
//         "TableNumber": "2.4",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 6
//         }
//       },
//       {
//         "TableNumber": "3.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 6,
//           "TotalGuestWithAdditional": 8
//         }
//       },
//       {
//         "TableNumber": "3.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 6,
//           "TotalGuestWithAdditional": 8
//         }
//       },
//       {
//         "TableNumber": "4.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 6
//         }
//       },
//       {
//         "TableNumber": "4.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "4.3",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 6
//         }
//       }
//     ],
//     "Main": [
//       {
//         "TableNumber": "31",
//         "TableInfo": {
//           "Price": 8000,
//           "AvailableGuestAmount": 3,
//           "TotalGuestWithAdditional": 4
//         }
//       },
//       {
//         "TableNumber": "32.1",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "32.2",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "32.3",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "33.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "33.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "34.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "34.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "35.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "35.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "36.1",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "36.2",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "36.3",
//         "TableInfo": {
//           "Price": 6000,
//           "AvailableGuestAmount": 2,
//           "TotalGuestWithAdditional": 3
//         }
//       },
//       {
//         "TableNumber": "37.1",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "37.2",
//         "TableInfo": {
//           "Price": 15000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 5
//         }
//       },
//       {
//         "TableNumber": "38",
//         "TableInfo": {
//           "Price": 17000,
//           "AvailableGuestAmount": 6,
//           "TotalGuestWithAdditional": 8
//         }
//       }
//     ],
//     "Vip": [
//       {
//         "TableNumber": "21",
//         "TableInfo": {
//           "Price": 17000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 7
//         }
//       },
//       {
//         "TableNumber": "22",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "23",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "24",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "25",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "26",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "27",
//         "TableInfo": {
//           "Price": 20000,
//           "AvailableGuestAmount": 7,
//           "TotalGuestWithAdditional": 12
//         }
//       },
//       {
//         "TableNumber": "28",
//         "TableInfo": {
//           "Price": 17000,
//           "AvailableGuestAmount": 5,
//           "TotalGuestWithAdditional": 7
//         }
//       }
//     ]
//   }
