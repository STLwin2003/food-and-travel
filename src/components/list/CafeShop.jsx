import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/Card";
import cafeData from "../../data/cafeData";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import cafe_img from "../../img/cafe2.jpg";

const CafeShop = () => {
  return (
    <div>
      <Navbar />

      <div fluid className=" mb-5">
        <Row className="text-center bg-brown g-0">
          <Col xs={12} sm={6} className="my-auto">
            <div className=" px-2">
              <p className="fs-1 mt-2 title1">Cafe Shop</p>
              <p className="fst-italic fs-00 fs-6">Quiet, Cozy and Elegant</p>
              <p className="fs-6 fs-00 px-4">
                Cafe shops are the best places for studying, reading and meeting
                our own soul. Here is the collection of best cafe shops in town.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="">
              <img src={cafe_img} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </div>

      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <p className="fs-000 fs-5 text-decoration-underline">
            Our Recommandations
          </p>
          <Row>
            {cafeData.map((data, i) => {
              return <Card xs={6} sm={6} key={i} data={data} />;
            })}
          </Row>
        </Container>
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default CafeShop;
