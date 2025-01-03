import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import allData from "../../data/allData";
import Card from "../cards/Card";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Local = () => {
  const data = allData.filter((e) => e.collection === "local");
  return (
    <div fluid className="bg-brown py-3">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <div className="text-center">
            <p className="fs-2 title1 py-3">Local Gift Shops</p>
          </div>
          <Row className="g-3">
            <Col className="text-center my-auto" xs={12} sm={4}>
              <p className="fs-00 px-3">
                Pathein's signatures are Halawa and pathein umbrella. Here is
                the best local foods and local gift shops you can try in the
                town.
              </p>
            </Col>
            {data.map((fd, i) => (
              <Card sm={2} xs={6} key={i} data={fd} />
            ))}
          </Row>
        </Container>
      </ScrollAnimation>
    </div>
  );
};

export default Local;
