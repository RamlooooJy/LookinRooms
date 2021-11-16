import React, {FC, useState} from 'react';
import {StyledAdminBar} from './styled';
import Button from "../Button/Button";
import AuthModal from "../../widgets/Modal/AuthModal";


const AdminBar: FC = () => {
  const [authorized, setAuthorized] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const onClick = () => {
    if(authorized) {
      setAuthorized(!authorized)
    }else {
      setModalActive(true)
    }
  }
  const toggleModalTEMP = () => {
    setModalActive(!modalActive)
  }
  return (
    <StyledAdminBar>
      <Button onClick={onClick} secondary>{authorized ? 'log out' : 'log in'}</Button>
      <AuthModal isActive={modalActive} toggleModal={toggleModalTEMP}/>
    </StyledAdminBar>
  );
};

export default AdminBar;
