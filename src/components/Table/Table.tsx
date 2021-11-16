import React, {FC, useState} from 'react';
import {StyledTable} from './StyledTable';
import {TableComponentI} from "../../common/interfaces";
import TableModal from "../../widgets/Modal/TableModal";
import Chairs from "../Chairs/Chairs";

const Table: FC<TableComponentI> = ({data, ...props}) => {
  const [isActiveModal, setActiveModal] = useState(false)
  const toggleModal = () => {
    if (isActiveModal) {
      setActiveModal(false)
    } else {
      setActiveModal(true)
    }
  }
  const onClick = () => {
    toggleModal()
  }
  const margin = () => {
    const space = props.space || 5
    let margin = ''
    if (!props.isLast && props.inline) {
      margin = `0 ${space}px 0 0`
    } else if (!props.isLast) {
      margin = `0 0 ${space}px 0`
    }
    return margin || '0'
  }
  const totalGuestAmmount = () => {
    const tableSize = Number(data.GuestsAmount) + (Number(data.AdditionalGuestAmount) || 0)
    return tableSize <= 4 ? 's1' : tableSize > 4 && tableSize <= 6 ? 's2' : 's3'
  }
  return (<>
      <StyledTable reversedTable={props.reversedTable} active={isActiveModal} tableNumber={data.TableNumber} onClick={onClick} margin={margin()}
                   tableSize={totalGuestAmmount()}>
        <Chairs data={data} />
      </StyledTable>
      {isActiveModal && <TableModal isActive={isActiveModal} toggleModal={toggleModal}/>}
    </>
  );
}

export default Table;
