import {useEffect, useState} from "react";
import {tablesStore} from "../store/tables/tablesStore";
import {StaticDimensions} from "../Application/globalValues";

export const useMounted = () => {
  const [height, setHeight] = useState('100vh')
  const updateHeight = () => {
    if (window.innerWidth > StaticDimensions.tablet) return
    setHeight(window.innerHeight + 'px')
    window.onresize = () => {
      setHeight(window.innerHeight + 'px')
    }
  }

  useEffect(() => {
    updateHeight()
    tablesStore.fetchTables('16.11.2021')
    /**todo
     //loadDafaultStore
     //loadSomethinMore */
  }, [])

  return [height]
}
