import React, {FC, useState} from 'react';
import {StyledTableWrapper} from './styled';
import {TableWrapperI} from "../../common/interfaces";
import Table from "../Table/Table";
import TableModal from "../../widgets/Modal/TableModal";


const TableWrapper: FC<TableWrapperI> = (props) => {
  return (
    <>
      <StyledTableWrapper {...props}>
        {props.tables.map((table, idx) =>
          <Table space={props.space} data={table} key={table.id} inline={props.direction === 'row'}
                 isLast={idx === props.tables.length - 1} {...table}
                 reversedTable={props.reversedTables}/>)}
      </StyledTableWrapper>
    </>
  );
};

export default TableWrapper;
