import React, {FC} from "react";
import CommonWrapper from "../../components/CommonWrapper/CommonWrapper";
import {ViewI} from "../../common/interfaces";
import {Flex} from "../../Application/globalStyled";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import {findTablesByNumbers} from "../../common/utils";

const Main: FC<ViewI> = ({data}) => {
  const tables1 = findTablesByNumbers(['31', '32.1', '32.2', '32.3', '33.1', '33.2',
    '34.1', '34.2', '35.1', '35.2', '36.1', '36.2', '36.3', '37.1', '37.2'], data)
  const tables2 = findTablesByNumbers(['38'], data)
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
export default Main
