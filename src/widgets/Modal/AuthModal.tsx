import React, {FC} from 'react';
import Modal, {ModalI} from "./index";
import Input from "../../components/Input";
import { StyledInputsContainer } from './styled';

const AuthModal:FC<ModalI> = ({isActive, toggleModal}) => {
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <StyledInputsContainer>
        <Input placeholder='Имя Фамилия'/>
        <Input placeholder='Инстаграмм'/>
        <Input placeholder='Номер телефона'/>
      </StyledInputsContainer>

    </Modal>
  );
};

export default AuthModal;
