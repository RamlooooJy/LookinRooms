import React, {FC} from "react";
import CommonWrapper from "../../components/CommonWrapper/CommonWrapper";
import {ViewI} from "../../common/interfaces";
import {Flex} from "../../Application/globalStyled";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import {findTablesByNumbers} from "../../common/utils";

const Vip: FC<ViewI> = ({data}) => {
  const tables1 = findTablesByNumbers(['21', '22', '23', '24', '25', '26', '27'], data)
  const tables2 = findTablesByNumbers(['28'], data)
  if(!tables1) return <>No Tables for This Date</>
  return (
    <CommonWrapper>
      <Flex justify={'space-between'} align={"flex-start"}>
        <TableWrapper grow={1} tables={tables1} direction={"row"}/>
      </Flex>
      <Flex justify={'space-between'} align={"flex-end"} sizeY={'100%'}>
        <TableWrapper reversedTables tables={tables2}/>
      </Flex>
    </CommonWrapper>
  )
}
export default Vip
