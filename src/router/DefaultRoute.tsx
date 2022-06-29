import React, {FC, LazyExoticComponent, Suspense} from "react";
import {Route} from "react-router-dom";
import Spinner from "../components/BackgroundSpinner/BackgroundSpinner";
import {observer} from "mobx-react-lite";
import {tablesStore} from "../store/tables/tablesStore";
import {ViewI} from "../common/interfaces";
import {Rooms} from "../common/dataInterfaces";
import ErrorMessageWithInfo from "../components/Errors/ErrorMessageWithInfo";

interface DefaultRouteI {
  Component: LazyExoticComponent<FC<ViewI>> | FC,
  path: string,
  dataKey?: Rooms,
  props?: any,
  isDefault?: boolean
}

const DefaultRoute: FC<DefaultRouteI> = observer(({dataKey= '', path, props, isDefault, Component}) => {
  let component = <></>
  const store = tablesStore.getDataByView(dataKey)

  if(tablesStore.isTablesError) {
    component = <ErrorMessageWithInfo/>
  } else
  if(tablesStore.isPending) {
    component = <Spinner/>
  } else {
    component = <Component data={store} {...props} />
  }
  return <Route path={path}>
    <Suspense fallback={<Spinner background={'transparent'}/>}>
      {component}
    </Suspense>
  </Route>
})
export default DefaultRoute

