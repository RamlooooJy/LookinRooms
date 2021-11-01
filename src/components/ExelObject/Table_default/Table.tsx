import {FC, useState} from "react";

type Order = 'ASC' | 'DESC' | 'DEF'

const Table: FC<{ tableData: { header: string[], body: string[][] }, filter?: boolean }> = ({tableData, filter}) => {
  const [order, setOrder] = useState<Order>('DEF')
  const [currentSortHeader, setCurrentSortHeader] = useState('')
  const [inputFilter, setInputFilter] = useState('')
  const getData = () => {
    const data = sortedData()
    return data.filter(row => row.find(item => String(item).toLowerCase().match(inputFilter.toLowerCase())))
  }
  const sortedData = () => {
    const index = tableData.header.findIndex(item => currentSortHeader === item)
    return [...tableData.body].sort((a, b) => {
      if (order === 'ASC') {
        return a[index] > b[index] ? 1 : a[index] < b[index] ? -1 : 0
      } else if (order === 'DESC') {
        return a[index] > b[index] ? -1 : a[index] < b[index] ? 1 : 0
      } else {
        return 0
      }
    })
  }
  const changeOrder = (th: string) => {
    if (th === currentSortHeader) {
      switch (order) {
        case 'ASC':
          setOrder('DESC')
          break;
        case 'DESC':
          setOrder('DEF')
          break;
        default:
          setOrder('ASC')
      }
    } else {
      setOrder('ASC')
    }
    setCurrentSortHeader(th)
  }
  const clickHeader = (th: string) => {
    changeOrder(th)
  }
  return <div>
    <input value={inputFilter} onChange={(e) => setInputFilter(e.target.value)} type="text" placeholder={'match text'}/>
    <table>
      <thead>
      <tr>
        {
          tableData.header.map((th => <th onClick={() => clickHeader(th)} key={th}>{th}</th>))
        }
      </tr>
      </thead>
      <tbody>
      {
        getData().map(((bus, inx) => <tr key={bus[0]}>
          {bus.map(td => <td key={td}>{td}</td>)}
        </tr>))
      }
      </tbody>
    </table>
  </div>
}

export default Table
