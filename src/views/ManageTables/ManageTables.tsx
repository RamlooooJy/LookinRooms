import React, {FC, SyntheticEvent, useState} from 'react';
import {observer} from "mobx-react-lite";
import {tablesStore} from "../../store/tables/tablesStore";
import {Flex} from '../../Application/globalStyled';
import {StyledManageTables} from "./styledManageTables";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import {TablePricesT} from "../../common/dataInterfaces";

const ManageTables: FC = observer(() => {
  if (!tablesStore.tableInfo.Main) return <>Загрузка информации о столах</>
  const {Shater, Main, Vip} = tablesStore.tableInfo
  const [changedTables, setChangedTables] = useState<TablePricesT[]>([])
  const onclickSave = () => {
    if(tablesStore.data.Date && !changedTables.length) {
      return
    }
    tablesStore.setTablesPricesOnDate(changedTables)
    setChangedTables([])
  }
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value: TablePricesT = {
      TableNumber: e.currentTarget.name.replace('table-', ''),
      Price: Number.parseFloat(e.currentTarget.value)
    }
    const changedTablesWithoutCurrent = changedTables.filter(changedTable=>changedTable.TableNumber !== value.TableNumber)
    setChangedTables([...changedTablesWithoutCurrent, value])
  }
  return <StyledManageTables>
    <i>* цены столов до редактирования указаны в средне-минимальной стоимости за все время</i>
    <h2>Shater</h2>
    <div>
      {
        Shater.map(table => {
          return <Flex key={table.TableNumber} direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <Input onChange={onChange} name={`table-${table.TableNumber}`} defaultValue={"" + table.TableInfo.Price}/>
          </Flex>
        })
      }
    </div>
    <div>
      <Button onClick={onclickSave} secondary>Изменить ценвы столов</Button>
    </div>
    <h2>Main</h2>
    <div>
      {
        Main.map(table => {
          return <Flex key={table.TableNumber} direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <Input onChange={onChange} name={`table-${table.TableNumber}`} defaultValue={"" + table.TableInfo.Price}/>
          </Flex>
        })
      }
    </div>
    <div>
      <Button onClick={onclickSave} secondary>Изменить ценвы столов</Button>
    </div>
    <h2>Vip</h2>
    <div>
      {
        Vip.map(table => {
          return <Flex key={table.TableNumber} direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <Input onChange={onChange} name={`table-${table.TableNumber}`} defaultValue={"" + table.TableInfo.Price}/>
          </Flex>
        })
      }
    </div>
    <div>
      <Button onClick={onclickSave} secondary>Изменить ценвы столов</Button>
    </div>
  </StyledManageTables>
})

export default ManageTables;


