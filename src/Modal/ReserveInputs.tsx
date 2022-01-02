import React, {FC, SyntheticEvent, useState} from 'react';
import {StyledControlsContainer, StyledInputsContainer} from "./styled";
import Input from "../components/Input";
import Button from "../components/Button/Button";
import {ReservedInfoT} from "../common/dataInterfaces";
import {dateStore} from "../store/DateStore/DateStore";
import {usersStore} from "../store/users/usersStore";
import {ModalI} from "./Modal";
import {writeDataIntoObject} from "../common/utils";
import {tablesStore} from "../store/tables/tablesStore";
import {observer} from "mobx-react-lite";
import {Flex} from '../Application/globalStyled';
import {GlobalTheme} from "../Application/globalValues";

type ReserveInputsComponentT = {
  data: ModalI["data"]
  onCancel: () => void,
  onFreeze: () => void,
  onReserve: (data: ReservedInfoT) => void
}

const ReserveInputs: FC<ReserveInputsComponentT> = observer(({data, onReserve, onCancel, onFreeze}) => {
  const [isError, setIsError] = useState(false)
  const [reservedData, setReservedData] = useState<ReservedInfoT>({
    TableNumber: data.TableNumber,
    Date: dateStore.date,
    Type: "Просрать бабки и подкатить к девочкам",
    Info: '',
    Money: {
      ReceivedMoney: data.Reserved?.Money.ReceivedMoney || 0,
      Debt: "Высчитать уже там где надо выводить с учетом цены стола и полученных денег"
    },
    Agent: {
      Name: usersStore.user ? usersStore.user.Fio : '',
      Phone: usersStore.user ? usersStore.user.Phone : '',
      Promo: usersStore.user ? usersStore.user.Promo : '',
    },
    Guest: {
      GuestName: data.Reserved?.Guest.GuestName || '',
      GuestsAmount: data.Reserved?.Guest.GuestsAmount || 0,
      PhoneNumber: data.Reserved?.Guest.PhoneNumber || '',
    },
  })
  const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (isError) setIsError(false)
    const field = event.currentTarget.dataset.field
    const value = event.currentTarget.value
    const newData = {...reservedData}
    writeDataIntoObject(field, value, newData)
    setReservedData(newData)
  }
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!reservedData.Guest.GuestName || !reservedData.Guest.GuestsAmount || !reservedData.Guest.PhoneNumber || !reservedData.Money.ReceivedMoney) {
      setIsError(true)
      return
    }
    onReserve(reservedData)
  }
  const changeToFreeze = () => {
    onFreeze()
  }
  return (<form onSubmit={onSend}>
      <StyledInputsContainer>
        {isError && 'Some fields are empty'}
        <Input defaultValue={reservedData.Guest.GuestName} placeholder='Имя гостя' field={'GuestName'} onChange={onChange}/>
        <Input defaultValue={reservedData.Guest.PhoneNumber} placeholder='Номер телефона' field={'PhoneNumber'} onChange={onChange}/>
        <Flex className={'container'} direction={"row"} justify={"space-between"}>
          <Input defaultValue={reservedData.Guest.GuestsAmount} placeholder='Количество гостей' field={'GuestsAmount'} onChange={onChange}/>
          <Input defaultValue={reservedData.Money.ReceivedMoney} placeholder='Предоплата' field={'ReceivedMoney'} onChange={onChange}/>
        </Flex>
        <Input defaultValue={reservedData.Info} placeholder='Доп. Информация' field={'Info'} onChange={onChange}/>
      </StyledInputsContainer>
      <StyledControlsContainer direction={"row"}>
        {Boolean(data.Reserved) ?
          <Button onClick={changeToFreeze} background={GlobalTheme.colors.orange}>Отменить бронь</Button>
          :
          <Button type={'submit'} disabled={tablesStore.isFrozen} secondary margin='5px 10px 5px 0'>Сохранить</Button>
        }
        <Button onClick={onCancel}>Отменить</Button>
      </StyledControlsContainer>
      <Button disabled={Boolean(data.Locked || data.Reserved)} onClick={changeToFreeze}
              background={GlobalTheme.colors.red}>Заморозить на 30 мин</Button>
    </form>
  );
})

export default ReserveInputs;
