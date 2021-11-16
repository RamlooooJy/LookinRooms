import {useEffect, useState} from "react";
import {Dimensions} from "../Application/globalStyled";
import {tablesStore} from "../store/tables/tablesStore";

export const useMounted = () => {
  const [height, setHeight] = useState('100vh')
  const updateHeight = () => {
    if (window.innerWidth > Dimensions.tablet) return
    setHeight(window.innerHeight + 'px')
    window.onresize = () => {
      setHeight(window.innerHeight + 'px')
    }
  }

  useEffect(() => {
    updateHeight()
    tablesStore.fetch()
    /**todo
     //loadDafaultStore
     //loadSomethinMore */
  }, [])

  return [height]
}
