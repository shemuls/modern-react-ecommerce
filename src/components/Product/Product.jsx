import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Product = ({ products, addTocartHandler }) => {
  const { name, category, price, img } = products;
  const fullName = name;
  const shortName = fullName.split(" ").splice(0, 5).join(" ");
  const description = fullName.split(" ").splice(5).join(" ");
  return (
    <>
      {/* product grid start */}
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
        <div className="card">
          <img
            style={{ height: "250px", objectFit: "contain" }}
            className="card-img p-3"
            src={img}
            alt="Vans"
          />
          <div className="card-body">
            <h4 className="card-title">{shortName}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Category: {category}
            </h6>
            <p className="card-text">{description}</p>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h5 className="mt-4">${price}</h5>
              </div>
              <button
                className="btn btn-danger mt-3"
                onClick={() => addTocartHandler(products)}
              >
                <FontAwesomeIcon className="mx-2" icon={faShoppingCart} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* product grid end */}
    </>
  );
};
