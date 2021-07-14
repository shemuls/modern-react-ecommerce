import { addToDatabaseCart } from "./DatabaseManager.js";

export const quantityHandler = (
  key,
  cart,
  setcart,
  increaseDecrease = "increase"
) => {
  const currentCart = cart;
  const sameProduct = currentCart.find(
    (singleProduct) => singleProduct.key === key
  );
  let quantityCount = 1;
  let newCart;
  if (sameProduct) {
    if (increaseDecrease === "increase") {
      quantityCount = sameProduct.quantity + 1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.key !== key
      );
      newCart = [sameProduct, ...othersProduct];
    } else if (increaseDecrease === "decrease" && sameProduct.quantity > 1) {
      quantityCount = sameProduct.quantity - 1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.key !== key
      );
      newCart = [sameProduct, ...othersProduct];
    } else {
      quantityCount = sameProduct.quantity + 0;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.key !== key
      );
      newCart = [sameProduct, ...othersProduct];
    }

    setcart(newCart);
    addToDatabaseCart(key, quantityCount);
  }
};
