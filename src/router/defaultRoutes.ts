import Home from "../views/Home";
import Main from "../views/Main";
import Vip from "../views/Vip";

export const defaultRoutes = [
  {
    path: '/shater',
    component: Home,
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
