import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";
import restauarant from "../data/restaurantData";

const Restaurant = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Row className="my-5">
          <Col xs={2}></Col>
          <Col xs={12} sm={6} className="mx-auto">
            <div className="text-center">
              <Link to={"/list/street"}>
                <Button variant="dark" className="rounded-pill px-4 me-1">
                  Street Food
                </Button>
              </Link>
              <Link to={"/list/cafe"}>
                <Button variant="dark" className="rounded-pill px-4 me-1">
                  Cafe Shop
                </Button>
              </Link>
              <Link to={"/list/restaurant"}>
                <Button variant="warning" className="rounded-pill px-4">
                  Restaurant
                </Button>
              </Link>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          There are <span>{restauarant.length}</span> items
        </p>
      </Container>
      <Container>
        <Row>
          {restauarant.map((fd, i) => {
            return <Card xs={6} sm={3} key={i} data={fd} />;
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Restaurant;