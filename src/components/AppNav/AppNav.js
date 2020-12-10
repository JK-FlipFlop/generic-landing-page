import React from "react";


import SideDrawer from '../SideDrawer/SideDrawer'

import logo from "../../static/logo.svg";
import "./AppNav.css";

const AppNav = (props) => {
  const {page} = props
  return (
    <nav className="appnav">
      <div className="wrapper">
        <div className="appnav__logo">
          <img src={logo} alt="App Logo"></img>
        </div>
        <div className="appnav__links">
          {/* <div className="appnav__hamburger-menu"><MenuIcon style={{fontSize: "26rem"}}/></div> */}
          <SideDrawer page={props.page}/>
          <ul className="appnav__list">
            <a href="#">
              <li className="appnav__item">Products</li>
            </a>
            <a href="#">
              <li className="appnav__item">About Us</li>
            </a>
            <a href="#">
              <li className="appnav__item">Career</li>
            </a>
            <a href="#">
              <li className="appnav__item">Pricing</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
