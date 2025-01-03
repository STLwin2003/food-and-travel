import React from "react";
import NNavbar from "../Navbar";
import Footer from "../Footer";
import { Col, Row, Container } from "react-bootstrap";
import Card from "../cards/Card";
import natureData from "../../data/natureData";
import nature_img from "../../img/nature.jpg";

const Nature = () => {
  return (
    <div>
      <NNavbar />
      <div fluid className="mb-5 bg-brown">
        <Row className="g-0">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Natural Resorts</p>
              <p className="fs-00 fst-italic">
                Vital, Majestic and Breathtaking
              </p>
              <p className="fs-6 fs-00">
                Natural gardens and resort are the essential tourist attractions
                in our country. See our latest collection about natural touring
                places.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img src={nature_img} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </div>

      <Container>
        <p className="fs-000 fs-5 text-decoration-underline">
          Our Recommandations
        </p>
        <Row>
          {natureData.map((data, i) => {
            return <Card xs={6} sm={6} key={i} data={data} />;
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Nature;
