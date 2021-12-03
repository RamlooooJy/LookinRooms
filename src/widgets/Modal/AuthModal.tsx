import React, {FC, useState} from 'react';
import Modal, {ModalI} from "./Modal";
import Input from "../../components/Input";
import {StyledControlsContainer, StyledInputsContainer} from './styled';
import Button from "../../components/Button/Button";
import {usersStore} from "../../store/users/usersStore";

// const validate = (values: any) => {
//   const errors = {} as any;
//   if (!values.login) {
//     errors.email = 'Required';
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// }
type FormInitial = {
  [key: string]: string
}
const AuthModal: FC<Omit<ModalI, 'data'>> = ({isActive, toggleModal}) => {
  const [formValues, setFormValues] = useState<FormInitial>({login: '2', password: ''})
  const [isPending, setIsPending] = useState(false)
  const onSubmit = (ev: any) => {
    setIsPending(true)
    usersStore.login(formValues, onLogin)
  }
  const onLogin = (isLogged: boolean) => {
    if(!isLogged) {
      console.log('error log in')
      isActive && setIsPending(false)
    }
    else {
      toggleModal()
    }
  }

  const onChange = (ev:any) => {
    setFormValues({
      ...formValues,
      [ev.target.name]: ev.target.value
    })
  }
  return (
    <Modal isActive={isActive} toggleModal={toggleModal}>
      <StyledInputsContainer>
          {
            Object.keys(formValues).map((key, id) =>
              <Input disabled={isPending} required key={key + id} type={key} name={key} onChange={onChange}
                     placeholder={key} onSubmit={onSubmit}/>
            )
          }
          <StyledControlsContainer direction={"row"}>
            <Button disabled={isPending} secondary margin='5px 10px 5px 0' onClick={onSubmit}>Войти</Button>
            <Button onClick={toggleModal}>Отменить</Button>
          </StyledControlsContainer>
      </StyledInputsContainer>
    </Modal>
  );
};

export default AuthModal;
