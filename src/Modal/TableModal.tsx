import React, {FC, useState} from 'react';
import Modal, {ModalI} from "./Modal";
import {LockedInfoT, ReservedInfoT} from "../common/dataInterfaces";
import {tablesStore} from "../store/tables/tablesStore";
import ReserveInputs from "./ReserveInputs";
import FreezeInputs from "./FreezeInputs";

const _30minutes = 1800000

const TableModal: FC<ModalI> = ({data, isActive, toggleModal}) => {
  const [isReserve, setIsReserve] = useState(true)
  const onReserve = (data: ReservedInfoT) => {
    tablesStore.reserveTable(data).then(toggleModal)
  }
  const onFrize = async (frizedData?: LockedInfoT) => {
    if (!frizedData) {
      setIsReserve(false)
      return
    }
    tablesStore.freezeTable({
      ...frizedData,
      Expired: new Date((Date.now() + _30minutes)).toISOString()
    }).then(toggleModal)
  }
  const onCancel = () => {
    if (isReserve) {
      toggleModal && toggleModal()
      return
    }
    setIsReserve(true)
  }
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <div className="info">
        <p>Стол: {data.TableNumber}</p>
        <p>Цена: {data.TableInfo.Price}</p>
      </div>
      {
        isReserve ?
          <ReserveInputs data={data} onReserve={onReserve} onCancel={onCancel} onFreeze={onFrize}/>
          :
          <FreezeInputs data={data} onCancel={onCancel} onFreeze={onFrize}/>
      }
    </Modal>
  );
}

export default TableModal;
