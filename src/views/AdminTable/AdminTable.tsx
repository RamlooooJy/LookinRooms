import React, {FC} from 'react';
import {StyledAdminTable} from './styled';
import {observer} from "mobx-react-lite";
import {tablesStore} from "../../store/tables/tablesStore";
import AdminTableHeader from "./AdminTableHeader";
import AdminTableBody from "./AdminTableBody";
import ErrorMessageWithInfo from "../../components/Errors/ErrorMessageWithInfo";

type TableHeader = string | {
  head: string
  body: string[]
}
export type TableHeadersT = TableHeader[]


const AdminTable: FC = observer(() => {
  const tableHeaders: TableHeadersT = [
    'Cтол №',
    {head: 'Номинал', body: ['Стоимость', 'Мест']},
    {head: 'Инфо и Заказчик', body: ['Имя', 'Контактный телефон', 'Количество гостей']},
    {head: 'Оплата', body: ['Получено', 'Долг']},
    'Агент',
    'Дата бронирования',
    'Доп. Инфо'
  ]
  const {Shater, Main, Vip} = tablesStore.data
  return !tablesStore.isTablesError ? <StyledAdminTable>
      <AdminTableHeader tableHeaders={tableHeaders}/>
      <AdminTableBody tableHeaders={tableHeaders} data={Shater} title={'Shater'}/>
      <AdminTableBody tableHeaders={tableHeaders} data={Main} title={'Main'}/>
      <AdminTableBody tableHeaders={tableHeaders} data={Vip} title={'Vip'}/>
    </StyledAdminTable>
    :
    <ErrorMessageWithInfo/>
})

export default AdminTable;
