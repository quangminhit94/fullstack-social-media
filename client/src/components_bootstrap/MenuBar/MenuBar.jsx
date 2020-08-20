import React from 'react'
import { NavLink } from "react-router-dom";


const MenuBar = (props) => {
  function activeRoute(routeName) {
    console.log(props.routes.indexOf(routeName));
    return props.routes.indexOf(routeName) > -1 ? "active" : "";
  }

  return (
    <div>
      <ul className="nav">
        {/* {this.state.width <= 991 ? <AdminNavbarLinks /> : null} */}
        {props.routes.map((prop, key) => {
          if (!prop.redirect)
            return (
              <li
                className={
                  prop.upgrade
                    ? "active active-pro"
                    : activeRoute(prop.layout + prop.path)
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          return null;
        })}
      </ul>
    </div>
  )
}

export default MenuBar
