import React, {FC} from 'react';
import Modal, {ModalI} from "./Modal";
import {StyledControlsContainer, StyledInputsContainer} from './styled';
import Button from "../components/Button/Button";
import {usersStore} from "../store/users/usersStore";
import {GlobalTheme} from "../Application/globalValues";


const LogoutModal: FC<Omit<ModalI, 'data'>> = ({isActive, toggleModal}) => {
  const logout = () => {
    usersStore.logout()
    toggleModal()
  }
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <StyledInputsContainer>
          <StyledControlsContainer direction={"row"}>
            <Button background={GlobalTheme.colors.red} margin='5px 10px 5px 0' onClick={logout}>Выйти из профиля</Button>
            <Button onClick={toggleModal}>Отменить</Button>
          </StyledControlsContainer>
      </StyledInputsContainer>
    </Modal>
  );
};

export default LogoutModal;
