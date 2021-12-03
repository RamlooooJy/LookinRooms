import React, {FC} from 'react';
import {createPortal} from "react-dom";
import {StyledModal, StyledModalContainer} from './styled';
import Logo from "../../components/Logo";
import {RoomItemT} from "../../common/dataInterfaces";

export interface ModalI {
  data: RoomItemT
  isActive: boolean
  toggleModal: () => void
  onClose?: () => void
  onOpen?: () => void
}


const Portal: FC = ({children}) => {
  const container = document.getElementById('modals')
  // @ts-ignore
  return createPortal(children, container)
};
const Modal: FC<Omit<ModalI, 'data'>> = ({isActive, toggleModal, children}) => {
  const clickOutside = (e: any) => {
    e.currentTarget === e.target && closeModal()
  }
  const closeModal = () => {
    toggleModal && toggleModal()
  }
  return <Portal>
    {isActive &&
    <StyledModal isActive={isActive} onClick={clickOutside}>
        <StyledModalContainer>
          <Logo onClick={closeModal}/>
          {children}
        </StyledModalContainer>
    </StyledModal>
    }
  </Portal> || ''
}

export default Modal;
