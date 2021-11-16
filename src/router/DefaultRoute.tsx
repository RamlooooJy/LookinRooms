import {FC, LazyExoticComponent, Suspense} from "react";
import {Route} from "react-router-dom";
import Spinner from "../components/BackgroundSpinner/BackgroundSpinner";

interface DefaultRouteI {
  Component: LazyExoticComponent<FC> | FC,
  path: string,
  props?: any,
  isDefault?: boolean
}

const DefaultRoute: FC<DefaultRouteI> = ({Component, path, props, isDefault}) => {
  return <Route>
    <Suspense fallback={<Spinner/>}>
      <Component {...props} />
    </Suspense>
  </Route>
}
export default DefaultRoute

