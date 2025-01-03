import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InfoBox = ({ detail }) => {
  return (
    <div>
      <div className="px-3 my-3 fs-00">
        <p className="fs-4 fs-000">Location and Contact</p>
        <div className="my-2">
          <iframe
            title="this is map"
            src={detail.map}
            allowfullscreen=""
            className="w-100"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="fs-6">
          <FontAwesomeIcon icon={faHouse} className="me-2" />
          {detail.location}
        </p>
        <p className="fs-6">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          Phone No:{" "}
          <Link
            className="text-decoration-none text-dark"
            to={`tel:${detail.phone}`}
          >
            {detail.phone}
          </Link>
        </p>
        {/* <p className="fs-6">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          Email: <span>{detail.email}</span>{" "}
        </p> */}
        <p className="fs-6">
          <FontAwesomeIcon icon={faClock} className="me-2" />
          Opening Hours: <span>{detail.hour}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
