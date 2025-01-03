import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import beach_img from "../../img/beach.jpg";

const Beaches = () => {
  return (
    <>
      {" "}
      <ScrollAnimation animateIn="fadeIn">
        <div fluid className="mt-2 mb-5 bg-brown">
          <Row className="g-0">
            <Col xs={12} sm={6} className="my-auto">
              <div className="text-center mt-3 px-4">
                <p className="fs-2 title1">Beautiful Beaches</p>
                <p className="fs-00 fst-italic">
                  Sunny, Refreshing and Relaxing
                </p>
                <p className="fs-6 fs-00">
                  As a delta region, there are many beaches in our area. Some
                  beaches are recognized as main tourist attractions. Here is a
                  collection of breathtaking beaches among them.
                </p>
                <Link to={"/beach"} className="text-decoration-none">
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

            <Col xs={12} sm={6}>
              <div>
                <img src={beach_img} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Beaches;
