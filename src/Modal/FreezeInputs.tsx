import React, {FC, SyntheticEvent, useState} from 'react';
import {StyledControlsContainer, StyledInputsContainer} from "./styled";
import Input from "../components/Input";
import Button from "../components/Button/Button";
import {LockedInfoT} from "../common/dataInterfaces";
import {dateStore} from "../store/DateStore/DateStore";
import {usersStore} from "../store/users/usersStore";
import {ModalI} from "./Modal";
import {writeDataIntoObject} from "../common/utils";
import {tablesStore} from "../store/tables/tablesStore";
import {observer} from "mobx-react-lite";

type FreezeInputsComponentT = {
  data: ModalI["data"]
  onCancel: () => void,
  onFreeze: (data: LockedInfoT) => void,
}

const FreezeInputs: FC<FreezeInputsComponentT> = observer(({data, onCancel, onFreeze}) => {
  const [frozenData, setFrozenData] = useState<LockedInfoT>({
    Expired: new Date().toISOString(), // +полчаса
    Info: '',
    TableNumber: data.TableNumber,
    Date: dateStore.date,
    Agent: {
      Name: usersStore.user ? usersStore.user.Fio : '',
      Phone: usersStore.user ? usersStore.user.Phone : '',
      Promo: usersStore.user ? usersStore.user.Promo : '',
    },
  })
  const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const field = event.currentTarget.dataset.field
    const value = event.currentTarget.value
    const newData = {...frozenData}
    writeDataIntoObject(field, value, newData)
    setFrozenData(newData)
  }
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onFreeze(frozenData)
  }

  return (<form onSubmit={onSend}>
      <StyledInputsContainer>
        <Input placeholder='Информация для того, чтобы не убрали заморозку' field={'Info'} onChange={onChange}/>
      </StyledInputsContainer>
      <StyledControlsContainer direction={"row"}>
        <Button type={'submit'} disabled={tablesStore.isFrozen} secondary margin='5px 10px 5px 0'>Заморозить</Button>
        <Button onClick={onCancel}>Вернуться к брони</Button>
      </StyledControlsContainer>
    </form>
  );
})

export default FreezeInputs;
