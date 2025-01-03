import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/Card";
import allData from "../../data/allData";
import restaurant_img from "../../img/restaurant.jpg";

const Restaurant = () => {
  const data = allData.filter((e) => e.collection === "restaurant");
  return (
    <div>
      <Navbar />
      <div fluid className="mb-5 bg-brown">
        <Row className="g-0 bg-brown">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Finest Restaurants</p>
              <p className="fs-00 fst-italic">Menu, Service and Hygienic</p>
              <p className="fs-6 fs-00">
                Restaurants play an important role in our daily life. They also
                represents the standard of our society. Here is the collection
                of best restaurants with great services and reputation.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img src={restaurant_img} alt="" className="w-100" />
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
            return <Card xs={12} sm={6} key={i} data={data} />;
          })}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Restaurant;
