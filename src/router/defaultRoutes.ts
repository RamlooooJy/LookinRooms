import Shater from "../views/Shater/Shater";
import Main from "../views/Main/Main";
import Vip from "../views/Vip/Vip";

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
