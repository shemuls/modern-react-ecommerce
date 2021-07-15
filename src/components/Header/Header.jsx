import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModernEcommerceContext } from "../../App.js";
import { UserNavToggle } from "../UserNavToggle/UserNavToggle.jsx";
import classes from "./Header.module.css";

export const Header = () => {
  const [menuCollaspse, setmenuCollaspse] = useState(false);
  const handleMenuCollaspse = () => {
    menuCollaspse ? setmenuCollaspse(false) : setmenuCollaspse(true);
  };
  window.onclick = function () {
    setmenuCollaspse(false);
  };
  const { loggedInUser } = useContext(ModernEcommerceContext);

  const [userNavToggle, setUserNavToggle] = useState(false);
  const userNavToggleHandle = () => {
    userNavToggle ? setUserNavToggle(false) : setUserNavToggle(true);
  };

  return (
    <div className="navbar-dark bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <NavLink to="/" className="navbar-brand text-light">
            <strong>ModerEcommerce</strong>
          </NavLink>
          <button onClick={handleMenuCollaspse} className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={menuCollaspse ? { display: "block" } : { display: "none" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <div className="d-flex">
              {loggedInUser.email ? (
                <div className={classes.navUserToggleArea}>
                  <span className="text-light mx-2">
                    {loggedInUser?.displayName && loggedInUser?.displayName}
                  </span>
                  <button
                    onClick={userNavToggleHandle}
                    className="btn btn-outline-light rounded-circle"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  {userNavToggle && (
                    <div className={classes.navUserToggle + " card p-4 shadow"}>
                      <UserNavToggle />
                    </div>
                  )}
                </div>
              ) : (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink exact to="/login" className="nav-link">
                      Login / Register
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
