import { Container, Row } from "react-bootstrap";

import PlaceCard from "../cards/PlaceCard";
import FoodCard from "../cards/FoodCard";
import React from "react";
import footData from "../../data/footData";
import Card from "../cards/FoodCard";

const After = ({ footData }) => {
  return (
    <div>
      <Container className="mb-5">
        <div className="text-center my-4">
          <hr />
          <p className="text-decoration-underline">Showing 12 results for</p>
          <span className="fs-2 fw-semibold">Steet Food</span>
          <hr />
        </div>
        <Row>
          {footData.map((data, i) => {
            return <Card xs={6} sm={3} key={i} footData={data} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default After;
