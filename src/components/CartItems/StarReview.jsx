import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const StarReview = ({ star }) => {
  return (
    <>
      {star === 1 && (
        <p className="p-0">
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </p>
      )}
      {star === 2 && (
        <p className="p-0">
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </p>
      )}
      {star === 3 && (
        <p className="p-0">
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </p>
      )}
      {star === 4 && (
        <p className="p-0">
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </p>
      )}
      {star === 5 && (
        <p className="p-0">
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </p>
      )}
    </>
  );
};
