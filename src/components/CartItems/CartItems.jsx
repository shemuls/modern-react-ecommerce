import React from "react";
import { StarReview } from "./StarReview.jsx";

export const CartItems = ({ cart }) => {
  const { img, name, price, star, category } = cart;
  console.log(cart);
  const fullName = name;
  const shortName = fullName.split(" ").splice(0, 3).join(" ");
  return (
    <>
      <div className="row shadow-sm mt-3 p-3 rounded">
        <div className="col-md-8">
          <div className="d-flex align-items-center">
            <div className="img-thumbnail">
              <img style={{ height: "100px" }} src={img} alt="" />
            </div>
            <div className="px-4">
              <h5>{shortName}</h5>
              <p>Category: {category}</p>
              <StarReview star={star} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <span>-</span>
            <input type="text" />
            <span>+</span>
          </div>
          <div>
            <p>QTY: 5</p>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
