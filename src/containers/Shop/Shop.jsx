import React, { useState } from "react";
import { Product } from "./../../components/Product/Product";
import fakeData from "./../../fakeData/index";

export const Shop = () => {
  const product12 = fakeData.splice(0, 12);
  const [products, setproducts] = useState(product12);

  return (
    <div className="row my-5">
      {products.map((singleProduct) => (
        <Product key={singleProduct.key} products={singleProduct} />
      ))}
    </div>
  );
};
