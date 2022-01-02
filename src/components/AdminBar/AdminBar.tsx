import React, {FC, useState} from 'react';
import {StyledAdminBar} from './styled';
import Button from "../Button/Button";
import AuthModal from "../../Modal/AuthModal";
import {usersStore} from "../../store/users/usersStore";
import {observer} from "mobx-react-lite";
import LogoutModal from "../../Modal/LogoutModal";


const AdminBar: FC = observer(() => {
  const [modalActive, setModalActive] = useState(false)
  const [logoutActive, setLogoutActive] = useState(false)
  const userData = usersStore.user && (usersStore.user.Login || '?')
  const onClick = () => {
    if(usersStore.user) {
      setLogoutActive(true)
    }else {
      setModalActive(true)
    }
  }
  const toggleModal = () => {
    modalActive && setModalActive(false)
    logoutActive && setLogoutActive(false)
  }
  return (
    <StyledAdminBar>
      <Button onClick={onClick} secondary>{usersStore.user ? userData : 'log in'}</Button>
      <AuthModal isActive={modalActive} toggleModal={toggleModal}/>
      <LogoutModal isActive={logoutActive} toggleModal={toggleModal}/>
    </StyledAdminBar>
  );
});

export default AdminBar;
