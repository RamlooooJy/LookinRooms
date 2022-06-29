import {Redirect, Switch} from "react-router-dom";
import {defaultRoutes} from "./defaultRoutes";
import DefaultRoute from "./DefaultRoute";
import React, {FC} from "react";
import Error404 from "../views/Error404/Error404";

const Routes: FC = () => {
  return <Switch>
    <Redirect exact from={'/'} to={defaultRoutes[0].path}/>
    {
      defaultRoutes.map((item) =>
        <DefaultRoute key={item.path} dataKey={item.data} path={item.path} Component={item.component} isDefault={true}/>
      )
    }
    <DefaultRoute path="*" Component={Error404}/>
  </Switch>
}
export default Routes
