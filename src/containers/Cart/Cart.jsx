import React, { useContext } from "react";
import { CartSummury } from "./../../components/CartSummury/CartSummury";
import { ModernEcommerceContext } from "./../../App";
import { CartItems } from "../../components/CartItems/CartItems.jsx";
import {
  removeFromDatabaseCart,
  addToDatabaseCart,
} from "../../utilities/DatabaseManager.js";

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
    const currentCart = cart;
    const sameProduct = currentCart.find(
      (singleProduct) => singleProduct.key === key
    );
    let quantityCount = 1;
    let newCart;
    if (sameProduct) {
      quantityCount = sameProduct.quantity + 1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.key !== key
      );
      newCart = [sameProduct, ...othersProduct];
      setcart(newCart);
      addToDatabaseCart(key, quantityCount);
    }
  };

  const decreaseQuantityHandler = (key) => {
    const currentCart = cart;
    const sameProduct = currentCart.find(
      (singleProduct) => singleProduct.key === key
    );
    let quantityCount = 1;
    let newCart;
    if (sameProduct && sameProduct.quantity > 0) {
      quantityCount = sameProduct.quantity + -1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.key !== key
      );
      newCart = [sameProduct, ...othersProduct];
      setcart(newCart);
      addToDatabaseCart(key, quantityCount);
    }
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
          <button className="btn btn-success mt-3">
            <strong>PLACE ORDER</strong>
          </button>
        </CartSummury>
      </div>
    </div>
  );
};
