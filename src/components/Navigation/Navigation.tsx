import {FC, useState,} from "react";
import {Link} from "../Link/Link";
import {defaultRoutes} from "../../router/defaultRoutes";
import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import React, {Fragment} from "react";
import { StyledNavigation } from "./styled";
import {DefaultComponent} from "../../common/interfaces";
import {observer} from "mobx-react-lite";
import {usersStore} from "../../store/users/usersStore";

const Navigation: FC<DefaultComponent> = observer((props) => {
  const history = useHistory()
  const [activeLink, setActiveLink] = useState(history.location.pathname)
  history.listen((location, action) => {
    setActiveLink(location.pathname)
  })
  const active = (path: string) => {
    let className = 'button '
    if (activeLink === path) {
      className += 'active'
    }
    return className
  }
  return <StyledNavigation {...props}>
    {
      defaultRoutes.map(item => {
        if (item.adminOnly && !usersStore.user) {
          return <Fragment key={item.path}/>
        }
        return <Link key={item.name} path={item.path}>
          <Button toggled className={`${active(item.path)} flex-bstretch`}>
            {item.icon && <div className={`icon icon-${item.icon}`}/>}
            <span className="text">{item.name}</span>
            {item.navIcon && <div className={item.navIcon}/>}
            </Button>
        </Link>
      }
      )
    }
  </StyledNavigation>
})

export default Navigation
