import React from "react";
import { StarReview } from "./StarReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartItems = ({
  cart,
  handleRemoveCartItem,
  increaseQuantityHandler,
  decreaseQuantityHandler,
}) => {
  const { key, img, name, price, star, category, quantity } = cart;
  const fullName = name;
  const shortName = fullName.split(" ").splice(0, 3).join(" ");
  return (
    <>
      <div className="row shadow-sm mt-3 py-3 rounded">
        <div className="col-md-8">
          <div className="d-flex align-items-center">
            <div className="px-2 text-danger">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleRemoveCartItem(key)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
            <div className="img-thumbnail">
              <img style={{ height: "130px" }} src={img} alt="" />
            </div>
            <div className="px-4">
              <h5>{shortName}</h5>
              <p>Category: {category}</p>
              <StarReview star={star} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center mb-3">
            <span
              onClick={() => decreaseQuantityHandler(key)}
              className="btn btn-warning"
            >
              -
            </span>
            <input
              style={{ width: "80px", margin: "10px" }}
              className="form-control text-center"
              type="text"
              value={quantity}
              onChange={() => null}
            />
            <span
              onClick={() => increaseQuantityHandler(key)}
              className="btn btn-warning"
            >
              +
            </span>
          </div>
          <div>
            <p className="m-1">Quantity: {quantity}</p>
            <p className="m-0">
              <strong>
                $ {price} * {quantity}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
