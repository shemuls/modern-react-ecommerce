import React, { useContext, useState } from "react";
import { MiniCart } from "../../components/MiniCart/MiniCart.jsx";
import { addToDatabaseCart } from "../../utilities/DatabaseManager.js";
import { Product } from "./../../components/Product/Product";
import fakeData from "./../../fakeData/index";
import { ModernEcommerceContext } from "./../../App";

export const Shop = () => {
  const [products, setproducts, cart, setcart] = useContext(
    ModernEcommerceContext
  );

  // Add to cart handler
  const addTocartHandler = (product) => {
    const currentCart = cart;
    const sameProduct = currentCart.find(
      (singleCart) => singleCart.key === product.key
    );

    let cartProductQuantity = 1;
    let newCart;
    if (sameProduct) {
      cartProductQuantity = sameProduct.quantity + 1;
      sameProduct.quantity = cartProductQuantity;
      const otherProducts = currentCart.filter(
        (singleProduct) => singleProduct.key !== product.key
      );
      newCart = [...otherProducts, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setcart(newCart);
    addToDatabaseCart(product.key, cartProductQuantity);
  };

  return (
    <>
      <div className="row my-5">
        {products.map((singleProduct) => (
          <Product
            key={singleProduct.key}
            products={singleProduct}
            addTocartHandler={addTocartHandler}
          />
        ))}
      </div>
      <MiniCart cart={cart} />
    </>
  );
};
