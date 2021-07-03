import React, { useState } from "react";

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
          <a className="navbar-brand" href="#a">
            Navbar
          </a>
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
                <a href="#a" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <button className="ml-auto">Hi</button>
        </nav>
      </div>
    </div>
  );
};
