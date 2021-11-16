import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {Absolute} from "../../Application/globalStyled";
import Sign from "../../components/Sign/Sign";
import CommonWrapper from "../../components/CommonWrapper/CommonWrapper";
import {tablesStore} from "../../store/tables/tablesStore";
import Spinner from "../../components/BackgroundSpinner/BackgroundSpinner";

const Shater: FC = observer(() => {
  if(!tablesStore.data.Shater) return <Spinner></Spinner>

  const tablesAll = {
    leftTop: tablesStore.data.Shater.filter(item=>item.TableNumber.match('1\.')),
    // leftBottom: tablesStore.data.Shater,
    // rightTop: tablesStore.data.Shater.filter(item=>item.TableNumber.match('2\.')),
    // rightTopBottom: tablesStore.data.Shater,
  }
  // const tables: TableT[] = tablesAll.leftBottom
  // const tables2: TableT[] = [
  //   {id: 12, TableNumber: '4.3', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 13, TableNumber: '4.2', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 16, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  // ]
  // const tables3: TableT[] = [
  //   {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  // ]
  // const tables4: TableT[] = [
  //   {id: 14, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2},
  //   {id: 15, TableNumber: '26', price: 15000, GuestsAmount: 4, AdditionalGuestAmount: 2}
  // ]

  return (
    <CommonWrapper direction={'row'} justify={"space-between"}>
      {/*<Flex justify={'space-between'} align={"flex-start"} sizeY={'100%'}>*/}
      {/*  <TableWrapper tables={tables}/>*/}
      {/*  <TableWrapper reversedTables space={'10'} direction={"row"} tables={tables2}/>*/}
      {/*</Flex>*/}
      {/*<Flex align={"flex-end"}>*/}
      {/*  <TableWrapper direction={"row"} tables={tables3}/>*/}
      {/*  <TableWrapper padding={'0 20px 20px'} reversedTables tables={tables4}/>*/}
      {/*</Flex>*/}
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
