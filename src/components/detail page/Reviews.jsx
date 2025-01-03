import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const Reviews = () => {
  return (
    <div>
      <Row className="bg-warning bg-opacity-25 mb-5 g-0">
        <Col xs={0} sm={2}></Col>
        <Col xs={12} sm={8}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <div className="text-center py-4">
                <p className="fs-4 title1">What people are saying?</p>
                <p className="fs-6 fs-000">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere
                </p>
                <p className="fs-5 fs-00">- The user name1</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </div>
  );
};

export default Reviews;
