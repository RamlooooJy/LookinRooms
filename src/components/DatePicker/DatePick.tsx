import React, {FC, forwardRef, useState} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {StyledDatePicker} from "./styled";
import {dateStore, todayDate} from "../../store/DateStore/DateStore";
import {tablesStore} from "../../store/tables/tablesStore";

let interval: any = null
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
  const [startDate, setStartDate] = useState<Date>(todayDate);
  const onChangeDate = (date: Date) => {
    setStartDate(date)
    dateStore.setDate(date)
    tablesStore.fetchTables(true)
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
