import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import nature_img from "../../img/nature.jpg";

const Nature = () => {
  return (
    <div fluid className="my-2">
      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0">
          <Col xs={12} sm={6}>
            <div>
              <img src={nature_img} alt="" className="w-100" />
            </div>
          </Col>

          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-4">
              <p className="fs-2 title1">Natural Resorts</p>
              <p className="fs-00 fst-italic">
                Vital, Majestic and Breathtaking
              </p>
              <p className="fs-6 fs-00">
                Natural gardens and resort are the essential tourist attractions
                in our country. See our latest collection about natural touring
                places.
              </p>
              <Link to={"/nature"} className="text-decoration-none">
                <p
                  className="text-center fs-6 fs-000 text-success"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Explore More
                </p>
              </Link>
            </div>
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
};

export default Nature;
