import React, {FC} from "react";
import {TableT} from "../../common/interfaces";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import CommonWrapper from "../../components/CommonWrapper/CommonWrapper";

const Vip: FC = () => {
  // const tables: TableT[] = [
  //   {id: 12, number: 1, price: 15000, GuestsAmount: 5},
  //   {id: 13, number: 1, price: 15000, GuestsAmount: 5}
  // ]
  return (
    <CommonWrapper>
        {/*<TableWrapper tables={tables} posX={0} posY={0} fixedBottom fixedRight/>*/}
        {/*<TableWrapper direction={"row"} tables={tables} posX={300} posY={0} fixedBottom fixedRight/>*/}
        {/*<TableWrapper direction={"row"} tables={tables} posX={0} posY={0} fixedBottom/>*/}
        {/*<TableWrapper tables={tables} posX={0} posY={180} fixedBottom/>*/}
    </CommonWrapper>
  )
}
export default Vip
