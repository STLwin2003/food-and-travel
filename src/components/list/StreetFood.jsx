import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/Card";
import Main from "../floating market/Main";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import street_food_img from "../../img/street_food2.jpg";
import "animate.css";
import allData from "../../data/allData";

const StreetFood = () => {
  const data = allData.filter((e) => e.collection === "street");
  return (
    <div>
      <Navbar />
      <Main />
      <hr />
      <ScrollAnimation animateIn="fadeIn">
        <div fluid className="mb-5">
          <Row className="text-center g-0 bg-brown">
            <Col xs={12} sm={6} className="my-auto">
              <div className="px-2">
                <p className="fs-1 mt-2 title1">Street Foods in Town</p>
                <p className="fs-00 fst-italic">
                  Fresh, Affordable and Traditional
                </p>
                <p className="fs-6 fs-00">
                  Foods that are affordable and fresh, are street foods. Variety
                  choices of street foods represents our culture and present. We
                  made a collection of street foods that are flavorful and
                  convenient.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="">
                <img src={street_food_img} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
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
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default StreetFood;
