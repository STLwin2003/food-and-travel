import React from "react";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import NNavbar from "../Navbar";

import beachData from "../../data/beachData";
import Card from "../cards/Card";
import beach_img from "../../img/beach.jpg";

const Beach = () => {
  return (
    <div>
      <NNavbar />
      <div fluid className="mb-5 bg-brown">
        <Row className="g-0">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Beautiful Beaches</p>
              <p className="fs-00 fst-italic">Sunny, Refreshing and Relaxing</p>
              <p className="fs-6 fs-00">
                As a delta region, there are many beaches in our area. Some
                beaches are recognized as main tourist attractions. Here is a
                collection of breathtaking beaches among them.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img src={beach_img} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </div>

      <Container>
        <p className="fs-000 fs-5 text-decoration-underline">
          Our Recommandations
        </p>
        <Row>
          {beachData.map((data, i) => {
            return <Card xs={6} sm={6} key={i} data={data} />;
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Beach;
