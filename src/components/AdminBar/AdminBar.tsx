import React, {FC, useState} from 'react';
import {StyledAdminBar} from './styled';
import Button from "../Button/Button";
import AuthModal from "../../widgets/Modal/AuthModal";
import {usersStore} from "../../store/users/usersStore";
import {observer} from "mobx-react-lite";


const AdminBar: FC = observer(() => {
  const [modalActive, setModalActive] = useState(false)
  const userData = usersStore.user && (usersStore.user.Login || '?')
  const onClick = () => {
    if(usersStore.user) {
      usersStore.logout()
    }else {
      setModalActive(true)
    }
  }
  const toggleModalTEMP = () => {
    setModalActive(!modalActive)
  }
  return (
    <StyledAdminBar>
      <Button onClick={onClick} secondary>{usersStore.user ? userData : 'log in'}</Button>
      <AuthModal isActive={modalActive} toggleModal={toggleModalTEMP}/>
    </StyledAdminBar>
  );
});

export default AdminBar;
