import React, {FC} from "react";
import {StyledViewWrapper} from "../commonStyled";
import {TableT} from "../../common/interfaces";
import TableWrapper from "../../components/TableWrapper/TableWrapper";

const Vip:FC = () => {
  // const tables: TableT[] = [
  //   {id: 12, number: 1, price: 15000, GuestsAmount: 5},
  //   {id: 13, number: 1, price: 15000, GuestsAmount: 5}
  // ]
  return (
    <StyledViewWrapper>
      {/*<TableWrapper tables={tables} posX={0} posY={0} fixedBottom fixedRight/>*/}
      {/*<TableWrapper direction={"row"} tables={tables} posX={300} posY={0} fixedBottom fixedRight/>*/}
      {/*<TableWrapper direction={"row"} tables={tables} posX={0} posY={0} fixedBottom/>*/}
      {/*<TableWrapper tables={tables} posX={0} posY={180} fixedBottom/>*/}
    </StyledViewWrapper>
  )
}
export default Vip
