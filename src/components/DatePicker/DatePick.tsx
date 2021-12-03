import React, {FC, forwardRef, useState} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {StyledDatePicker} from "./styled";
import {dateStore} from "../../store/DateStore/DateStore";
import {tablesStore} from "../../store/tables/tablesStore";

const CutomDatePicker = forwardRef((props: any, ref: any) => (
  <button onClick={props.onClick} ref={ref}>
    {props.value}
  </button>
));
const isWeekday = (date:any) => {
  const day = date.getDay();
  return day >= 5;
};
const DatePick: FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const onChangeDate = (date: Date) => {
    setStartDate(date)
    dateStore.setDate(date)
    tablesStore.fetchTables(date.toLocaleDateString())
  }
  return (<StyledDatePicker data-title='Date picker'>
    <DatePicker
      withPortal
      portalId="modals"
      dateFormat="dd.MM.yyyy"
      filterDate={isWeekday}
      selected={startDate}
      customInput={<CutomDatePicker />}
      onChange={onChangeDate}/>
  </StyledDatePicker>)
}

export default DatePick
