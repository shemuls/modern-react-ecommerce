import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="text-center text-light p-5">
        <div>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon className="mx-3" icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon className="mx-3" icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div
        className="text-center text-muted p-3"
        style={{ backgroundColor: "#000" }}
      >
        <span>© 2020 Copyright: shemuls.com</span>
      </div>
    </div>
  );
};
