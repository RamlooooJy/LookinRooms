import React from "react";


const Shater = React.lazy(() => import("../views/Shater/Shater"));
const Main = React.lazy(() => import("../views/Main/Main"));
const Vip = React.lazy(() => import("../views/Vip/Vip"));
// const WithLoader:FC = observer(({children}) => {
//   if(!tablesStore.data.Shater) return <Spinner></Spinner>
//   return children
// })
export const defaultRoutes = [
  {
    path: '/shater',
    component: Shater,
    name: 'Шатер',
    icon: 'shater',
    navIcon: 'icon-right'
  },
  {
    path: '/main',
    component: Main,
    name: 'МЭЙН',
    icon: 'main',
    navIcon: 'icon-right'
  },
  {
    path: '/vip',
    component: Vip,
    name: 'ВИП',
    icon: 'vip',
    navIcon: 'icon-right'
  }
]
