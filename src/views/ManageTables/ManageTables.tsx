import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {tablesStore} from "../../store/tables/tablesStore";
import EditableInput from "../../components/EditableInput/EditableInput";
import {Flex} from '../../Application/globalStyled';
import {StyledManageTables} from "./styledManageTables";
import Button from "../../components/Button/Button";

const ManageTables: FC = observer(() => {
  if (!tablesStore.tableInfo.Main) return <>Загрузка информации о столах</>
  const {Shater, Main, Vip} = tablesStore.tableInfo
  const onclickSave = () => {
    tablesStore.setTablesPricesOnDate(tablesStore.tableInfo)
  }
  return <StyledManageTables>
    <i>* цены столов до редактирования указаны в средне-минимальной стоимости за все время</i>
    <h2>Shater</h2>
    <div>
      {
        Shater.map(table => {
          return <Flex direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <EditableInput defaultValue={"" + table.TableInfo.Price}/>
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
          return <Flex direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <EditableInput defaultValue={"" + table.TableInfo.Price}/>
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
          return <Flex direction={"row"} align={"center"}>
            <span className='table-number'>{table.TableNumber}</span>
            <EditableInput defaultValue={"" + table.TableInfo.Price}/>
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


