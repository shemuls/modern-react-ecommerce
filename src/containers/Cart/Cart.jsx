import React, { useContext } from "react";
import { CartSummury } from "./../../components/CartSummury/CartSummury";
import { ModernEcommerceContext } from "./../../App";
import { CartItems } from "../../components/CartItems/CartItems.jsx";
import { removeFromDatabaseCart } from "../../utilities/DatabaseManager.js";

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
  return (
    <div className="row m-4">
      <div className="col-md-8">
        {cart.map((singleCartItem) => (
          <CartItems
            key={singleCartItem.key}
            cart={singleCartItem}
            handleRemoveCartItem={handleRemoveCartItem}
          />
        ))}
      </div>
      <div className="col-md-4">
        <CartSummury cart={cart}>
          <button className="btn btn-success mt-3">
            <strong>PLACE ORDER</strong>
          </button>
        </CartSummury>
      </div>
    </div>
  );
};
