import {Redirect, Switch, useHistory} from "react-router-dom";
import {defaultRoutes} from "./defaultRoutes";
import DefaultRoute from "./DefaultRoute";
import React, {FC} from "react";

const Routes: FC = () => {
  const history = useHistory()
  if (!defaultRoutes.find(route => route.path === history.location.pathname)) {
    return <Redirect to={defaultRoutes[0].path} />
  }
  return <Switch>
    {
      defaultRoutes.map((item) =>
        <DefaultRoute key={item.path} path={item.path} Component={item.component} isDefault={true}/>
      )
    }
  </Switch>
}
export default Routes
