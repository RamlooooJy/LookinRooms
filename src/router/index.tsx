import React from "react";
import {HashRouter} from "react-router-dom";
import Routes from './Routes';
import Sidebar from "../widgets/SideBar/Sidebar";
import TablesMap from "../views";

const RouterView = () => {
  return <HashRouter>
    <Sidebar />
    <TablesMap>
      <Routes />
    </TablesMap>
  </HashRouter>
}
export default RouterView

