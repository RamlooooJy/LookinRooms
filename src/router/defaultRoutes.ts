import React, {FC, LazyExoticComponent} from "react";
import {ViewI} from "../common/interfaces";
import {Rooms} from "../common/dataInterfaces";


const Shater = React.lazy(() => import("../views/Shater/Shater"));
const Main = React.lazy(() => import("../views/Main/Main"));
const Vip = React.lazy(() => import("../views/Vip/Vip"));
const AdminTable = React.lazy(() => import("../views/AdminTable/AdminTable"));
const ManageTables = React.lazy(() => import("../views/ManageTables/ManageTables"));
// const WithLoader:FC = observer(({children}) => {
//   if(!tablesStore.data.Shater) return <Spinner></Spinner>
//   return children
// })

type DefaultRoutesI = {
  path: string,
  component: LazyExoticComponent<FC<ViewI>> | FC,
  name: string,
  data: Rooms,
  icon: string,
  navIcon: string,
  adminOnly?: boolean,
}
export const defaultRoutes:DefaultRoutesI[] = [
  {
    path: '/shater',
    component: Shater,
    name: 'Шатер',
    data: 'Shater',
    icon: 'shater',
    navIcon: 'icon-right'
  },
  {
    path: '/main',
    component: Main,
    name: 'МЭЙН',
    data: 'Main',
    icon: 'main',
    navIcon: 'icon-right'
  },
  {
    path: '/vip',
    component: Vip,
    name: 'ВИП',
    data: 'Vip',
    icon: 'vip',
    navIcon: 'icon-right'
  },
  {
    path: '/admin',
    component: AdminTable,
    name: 'Таблица Админа',
    data: '',
    adminOnly: true,
    icon: 'admin',
    navIcon: 'icon-right'
  },
  {
    path: '/manageTables',
    component: ManageTables,
    name: 'Цены столов',
    data: '',
    adminOnly: true,
    icon: 'admin-tables',
    navIcon: 'icon-right'
  },
]
