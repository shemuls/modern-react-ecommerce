import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./MiniCart.module.css";
import { CartSummury } from "../CartSummury/CartSummury.jsx";
import { Link } from "react-router-dom";

export const MiniCart = ({ cart }) => {
  const [popup, setPopup] = useState(false);

  const totalQuantity = cart.reduce((prev, current = 0) => {
    return prev + current.quantity;
  }, 0);

  const popupHandler = () => {
    popup ? setPopup(false) : setPopup(true);
  };

  return (
    <div className={classes.miniCartArea}>
      <div
        className={
          "shadow rounded d-flex justify-content-between " +
          classes.miniCartDesign
        }
      >
        <div onClick={popupHandler} className={classes.cursor}>
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <span className="text-danger">{totalQuantity}</span>
        </div>

        <div onClick={popupHandler} className={classes.cursor}>
          {popup && (
            <FontAwesomeIcon className="text-danger" icon={faWindowClose} />
          )}
        </div>
      </div>
      {popup && (
        <CartSummury cart={cart}>
          <Link to="cart" className="btn btn-danger rounded-0">
            VIEW CART
          </Link>
        </CartSummury>
      )}
    </div>
  );
};
