import {FC} from "react";

import {Route} from "react-router-dom";

interface DefaultRouteI {
  Component: FC,
  path: string,
  props?: any,
  isDefault?: boolean
}

const DefaultRoute: FC<DefaultRouteI> = ({Component, path, props, isDefault}) => {
  return <Route>
    <Component {...props} />
  </Route>
}
export default DefaultRoute

