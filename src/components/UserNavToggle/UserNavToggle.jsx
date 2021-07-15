import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModernEcommerceContext } from "../../App.js";
import classes from "./UserNavToggle.module.css";
import "firebase/auth";
import { signOut } from "../../utilities/AuthManager/AuthManager.js";

export const UserNavToggle = () => {
  const { loggedInUser, setLoggedInUser } = useContext(ModernEcommerceContext);
  const { displayName } = loggedInUser;

  const logOutBtnHandle = () => {
    signOut().then((res) => {
      setLoggedInUser(res);
    });
  };

  return (
    <div>
      <h6 className="card-title">
        Hello {(displayName && displayName) || "there"} !
      </h6>
      <hr />
      <ul className={classes.userToggleMenuArea}>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Order</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Notification</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Edit Account</NavLink>
        </li>
        <li>
          <button
            onClick={logOutBtnHandle}
            className="btn btn-outline-danger btn-sm mt-2"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
