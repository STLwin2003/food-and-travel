import { Container, Row, Button } from "react-bootstrap";

import FoodCard from "../cards/Card";
import React from "react";
import footData from "../../data/footData";

const Before = () => {
  const RatingItem = footData.filter((fd) => fd.rating === true);
  return (
    <div>
      <Container>
        <hr />
        <div className="mb-5">
          <p className="fs-5">Recent Searches : </p>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Street Food
          </Button>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Cafe Shop
          </Button>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Restaurant
          </Button>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Pagodas
          </Button>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Charity
          </Button>
          <Button variant="warning" className="rounded-pill me-2 mb-2">
            Beaches
          </Button>
        </div>
        <hr />
        <div className="mb-5">
          <p className="fs-3 fw-medium fs-000">Top Picks For You</p>

          <Row>
            {RatingItem.map((fd, i) => (
              <FoodCard sm={3} xs={6} key={i} foodData={fd} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Before;
