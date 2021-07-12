import React, { useContext } from "react";
import { CartSummury } from "./../../components/CartSummury/CartSummury";
import { ModernEcommerceContext } from "./../../App";
import { CartItems } from "../../components/CartItems/CartItems.jsx";

export const Cart = () => {
  const { cart } = useContext(ModernEcommerceContext);
  return (
    <div className="row m-4">
      <div className="col-md-8">
        {cart.map((singleCartItem) => (
          <CartItems key={singleCartItem.key} cart={singleCartItem} />
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
