import React from "react";

export const CartSummury = ({ cart, children }) => {
  const totalPrice = cart.reduce((prev, current = 0) => {
    return prev + current.price * current.quantity;
  }, 0);
  const totalQuantity = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);

  let shippingCost = 0;
  if (totalPrice > 200 && totalPrice < 500) {
    shippingCost = 20;
  } else if (totalPrice > 500 && totalPrice < 1000) {
    shippingCost = 50;
  } else if (totalPrice > 1000 && totalPrice < 1500) {
    shippingCost = 70;
  } else if (totalPrice > 1500) {
    shippingCost = 100;
  }

  return (
    <div className="list-group shadow">
      <span className="list-group-item list-group-item-action bg-danger text-light">
        <strong> Cart Summury</strong>
      </span>
      <span className="list-group-item list-group-item-action">
        Cart item: {cart.length}
      </span>
      <span className="list-group-item list-group-item-action">
        Total qty: {totalQuantity}
      </span>
      <span className="list-group-item list-group-item-action">
        Total Price: {totalPrice.toFixed(2)}
      </span>
      <span className="list-group-item list-group-item-action">
        Shipping Cost: {shippingCost}
      </span>
      <span className="list-group-item list-group-item-action bg-warning">
        <strong>Grand Total: {(totalPrice + shippingCost).toFixed(2)}</strong>
      </span>
      {children}
    </div>
  );
};
