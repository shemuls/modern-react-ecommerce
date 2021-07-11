import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./MiniCart.module.css";
import { CartSummury } from "../CartSummury/CartSummury.jsx";

export const MiniCart = ({ cart }) => {
  const [popup, setpopup] = useState(false);

  const totalQuantity = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  const showPopupHandler = () => {
    setpopup(true);
  };
  const closePopupHandler = () => {
    setpopup(false);
  };

  return (
    <div className={classes.miniCartArea}>
      <div
        className={
          "shadow rounded d-flex justify-content-between " +
          classes.miniCartDesign
        }
      >
        <div onClick={showPopupHandler} className={classes.cursor}>
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <span className="text-danger">{totalQuantity}</span>
        </div>

        <div onClick={closePopupHandler} className={classes.cursor}>
          {popup && (
            <FontAwesomeIcon className="text-danger" icon={faWindowClose} />
          )}
        </div>
      </div>
      {popup && <CartSummury cart={cart} />}
    </div>
  );
};
