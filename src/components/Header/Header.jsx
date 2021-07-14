import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuCollaspse, setmenuCollaspse] = useState(false);
  const handleMenuCollaspse = () => {
    setmenuCollaspse(true);
  };
  const handleMenuCollaspseClose = () => {
    setmenuCollaspse(false);
  };

  return (
    <div className="navbar-light bg-warning">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <Link to="/" className="navbar-brand" href="#a">
            Navbar
          </Link>
          {menuCollaspse ? (
            <button
              onClick={handleMenuCollaspseClose}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          ) : (
            <button onClick={handleMenuCollaspse} className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
          <div
            style={menuCollaspse ? { display: "block" } : { display: "none" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <button className="ml-auto">Hi</button>
          <Link to="/login">Login page</Link>
        </nav>
      </div>
    </div>
  );
};
