import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/Card";
import allData from "../../data/allData";
import pagoda_img from "../../img/pagoda.jpg";

const Pagoda = () => {
  const data = allData.filter((e) => e.collection === "pagoda");
  return (
    <div>
      <Navbar />
      <div fluid className="mb-5">
        <Row className="g-0 bg-brown">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Famous Pagodas</p>
              <p className="fst-italic fs-00">Ancient, Iconic and Cultural</p>
              <p className="fs-6 fs-00">
                Pagodas have historical significance of our tradition and
                culture. People often visit pagodas to explore local historal
                figures and different architectural heritage. We made a
                collection of pagodas that are ancient and unique around
                Pathein.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img src={pagoda_img} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </div>

      <Container>
        <p className="fs-000 fs-5 text-decoration-underline">
          Our Recommandations
        </p>
        <Row>
          {data.map((data, i) => {
            return <Card xs={6} sm={4} key={i} data={data} />;
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Pagoda;
