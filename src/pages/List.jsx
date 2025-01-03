import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import allData from "../data/allData";
import Card from "../components/cards/Card";

const List = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Row className="">
          <p className="fs-5 fs-00 mt-3">
            We can see all food and places in Pathein including street food,
            cafe shop, restaurant, pagoda, natural resorts and beach.
          </p>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          <span>{allData.length}</span> items
        </p>
      </Container>
      <Container>
        <Row>
          {allData.map((fd, i) => {
            return <Card xs={6} sm={3} key={i} data={fd} />;
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default List;
