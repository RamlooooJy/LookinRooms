import React, {FC} from 'react';
import Modal, {ModalI} from "./index";
import Input from "../../components/Input";
import {StyledControlsContainer, StyledInputsContainer} from './styled';
import Button from "../../components/Button/Button";

const TableModal:FC<ModalI> = ({isActive, toggleModal}) => {
  const onConfirm = () => {

  }
  const onCancel = () => {
    toggleModal && toggleModal()
  }
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <StyledInputsContainer>
        <Input placeholder='Имя Фамилия'/>
        <Input placeholder='Инстаграмм'/>
        <Input placeholder='Номер телефона'/>
      </StyledInputsContainer>
      <StyledControlsContainer direction={"row"}>
        <Button secondary margin='5px 10px 5px 0' onClick={onConfirm}>Сохранить</Button>
        <Button onClick={onCancel}>Отменить</Button>
      </StyledControlsContainer>
    </Modal>
  );
};

export default TableModal;
