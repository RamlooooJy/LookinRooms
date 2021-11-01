import {FC, useState} from "react";
import {Link} from "../Link/Link";
import {defaultRoutes} from "../../router/defaultRoutes";
import {useHistory} from "react-router-dom";
import Button from "../Button";
import React from "react";
import { StyledNavigation } from "./styled";

const Navigation: FC = () => {
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
  return <StyledNavigation>
    <Button className='button'/>

    {
      defaultRoutes.map(item =>
        <Link key={item.name} path={item.path}>
          <Button className={`${active(item.path)} flex-bstretch`}>
            {item.icon && <div className={`icon icon-${item.icon}`}/>}
            <span className="text">{item.name}</span>
            {item.navIcon && <div className={item.navIcon}/>}
            </Button>
        </Link>
      )
    }
  </StyledNavigation>
}

export default Navigation
