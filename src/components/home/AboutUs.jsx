import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Row, Col } from "react-bootstrap";
import "animate.css";
import aboutUs_img from "../../img/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <div className="my-4 bg-brown" fluid>
          <Row className="g-0">
            <Col sm={6} xs={12} className="my-auto">
              <div className="px-4 fs-00 text-center">
                <p className="fs-2 fw-medium title1 mt-3">What are we?</p>
                <p className="fs-5">
                  SarMalTwarMal is a web application that allow users to search
                  and navigate different foods and places. In our website, we
                  present several different foods and places to explore in
                  Pathein.
                </p>
                <p className="fs-5">
                  SarMalTwarMal is a Third-Year(3rd) project of Information
                  Technology Department(IT) from Technological University of
                  Pathein(PTU).
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <img src={aboutUs_img} alt="" className="w-100 pe-0" />
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutUs;
