import React, { useContext } from "react";
import { CartSummury } from "./../../components/CartSummury/CartSummury";
import { ModernEcommerceContext } from "./../../App";
import { CartItems } from "../../components/CartItems/CartItems";
import { removeFromDatabaseCart } from "../../utilities/DatabaseManager";
import { quantityHandler } from "../../utilities/CustomFunction";
import { useHistory } from "react-router-dom";

export const Cart = () => {
  const { cart, setcart } = useContext(ModernEcommerceContext);
  const handleRemoveCartItem = (key) => {
    const currentCart = cart;
    const updateCart = currentCart.filter(
      (sigleProduct) => sigleProduct.key !== key
    );
    setcart(updateCart);
    removeFromDatabaseCart(key);
  };

  const increaseQuantityHandler = (key) => {
    quantityHandler(key, cart, setcart, "increase");
  };

  const decreaseQuantityHandler = (key) => {
    quantityHandler(key, cart, setcart, "decrease");
  };

  const getHistory = useHistory();
  const handlePlaceOrderBtn = () => {
    getHistory.push("/shipping");
  };

  return (
    <div className="row m-4">
      <div className="col-md-8">
        {cart.map((singleCartItem) => (
          <CartItems
            key={singleCartItem.key}
            cart={singleCartItem}
            handleRemoveCartItem={handleRemoveCartItem}
            increaseQuantityHandler={increaseQuantityHandler}
            decreaseQuantityHandler={decreaseQuantityHandler}
          />
        ))}
      </div>
      <div className="col-md-4">
        <CartSummury cart={cart}>
          <button onClick={handlePlaceOrderBtn} className="btn btn-danger mt-3">
            <strong>PLACE ORDER</strong>
          </button>
        </CartSummury>
      </div>
    </div>
  );
};
