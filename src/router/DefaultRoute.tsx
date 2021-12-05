import React, {FC, LazyExoticComponent, Suspense} from "react";
import {Route} from "react-router-dom";
import Spinner from "../components/BackgroundSpinner/BackgroundSpinner";
import {observer} from "mobx-react-lite";
import {tablesStore} from "../store/tables/tablesStore";
import {ViewI} from "../common/interfaces";
import {Rooms} from "../common/dataInterfaces";

interface DefaultRouteI {
  Component: LazyExoticComponent<FC<ViewI>> | FC,
  path: string,
  dataKey?: Rooms,
  props?: any,
  isDefault?: boolean
}

const DefaultRoute: FC<DefaultRouteI> = observer(({dataKey= '', path, props, isDefault, Component}) => {
  const store = tablesStore.getDataByView(dataKey)
  return <Route path={path}>
    <Suspense fallback={<Spinner background={'transparent'}/>}>
      {tablesStore.isPending
        ? <Spinner/>
        : <Component data={store} {...props} />
      }
    </Suspense>
  </Route>
})
export default DefaultRoute

