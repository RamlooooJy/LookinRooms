import React, {FC, SyntheticEvent, useState} from 'react';
import Modal, {ModalI} from "./Modal";
import Input from "../../components/Input";
import {StyledControlsContainer, StyledInputsContainer} from './styled';
import Button from "../../components/Button/Button";
import {usersStore} from "../../store/users/usersStore";
import {ReservedInfoT} from "../../common/dataInterfaces";
import {dateStore} from '../../store/DateStore/DateStore';
import {writeDataIntoObject} from "../../common/utils";

const TableModal: FC<ModalI> = ({data, isActive, toggleModal}) => {
  const [modalData, setModalData] = useState<ReservedInfoT>({
    TableNumber: data.TableNumber,
    Date: dateStore.date,
    Type: "Просрать бабки и подкатить к девочкам",
    Info: '',
    Money: {
      ReceivedMoney: 3000,
      Debt: "Высчитать уже там где надо выводить с учетом цены стола и полученных денег"
    },
    Agent: {
      Name: usersStore.user ? usersStore.user.Fio : '',
      Phone: usersStore.user ? usersStore.user.Phone : '',
      Promo: usersStore.user ? usersStore.user.Promo : '',
    },
    Guest: {
      GuestName: '',
      GuestsAmount: 0,
      PhoneNumber: ''
    },
  })
  const onConfirm = () => {
    console.log(modalData)
  }
  const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const field = event.currentTarget.dataset.field
    const value = event.currentTarget.value
    const newData = {...modalData}
    writeDataIntoObject(field, value, newData)
    setModalData(newData)
  }
  const onFrize = () => {
    console.log('frize')
  }
  const onCancel = () => {
    toggleModal && toggleModal()
  }
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <StyledInputsContainer>
        <Input placeholder='Имя гостя' field={'GuestName'} onChange={onChange}/>
        <Input placeholder='Номер телефона' field={'PhoneNumber'} onChange={onChange}/>
        <Input placeholder='Количество гостей' field={'GuestsAmount'} onChange={onChange}/>
        <Input placeholder='Предоплата' field={'ReceivedMoney'} onChange={onChange}/>
        <Input placeholder='Доп. Информация' field={'Info'} onChange={onChange}/>
      </StyledInputsContainer>
      <StyledControlsContainer direction={"row"}>
        <Button secondary margin='5px 10px 5px 0' onClick={onConfirm}>Сохранить</Button>
        <Button onClick={onCancel}>Отменить</Button>
      </StyledControlsContainer>
      <Button onClick={onFrize} background={'red'}>Не знаю че делать</Button>
    </Modal>
  );
}

export default TableModal;
