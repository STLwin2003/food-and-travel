import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const LikeToggle = ({ Active, handleChangeActive }) => {
  return (
    <>
      {Active ? (
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-warning"
          onClick={handleChangeActive}
        />
      ) : (
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-dark"
          onClick={handleChangeActive}
        />
      )}
    </>
  );
};

export default LikeToggle;
