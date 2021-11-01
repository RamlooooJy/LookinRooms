import React from "react";
import {HashRouter} from "react-router-dom";
import Routes from './Routes';
import Sidebar from "../widgets/SideBar";

const RouterView = () => {
  return <HashRouter>
    <Sidebar />
    <Routes />
  </HashRouter>
}
export default RouterView

