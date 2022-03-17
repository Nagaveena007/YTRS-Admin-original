import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

function Sidebar({ routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper" style={{ backgroundColor: "white" }}>
        <div className="logo d-flex align-items-center justify-content-center">
          <a href="/" className="simple-text logo-mini mx-1">
            <div className="">
              <img
                src={require("assets/img/logo.png").default}
                alt="..."
                style={{ width: "9rem" }}
              />
            </div>
          </a>
        </div>
        <Nav
        /*   style={{
            color: "black",
          }} */
        >
          {routes.map((prop, key) => {
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
                    style={{
                      color: "black",
                    }}
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
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
