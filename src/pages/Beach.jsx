import { Button, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Card from "../components/cards/Card";
import beachData from "../data/beachData";

const Beach = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="my-3">
          <Col xs={2}></Col>
          <Col xs={12} sm={6} className="mx-auto">
            <div className="text-center">
              <Link to={"/list/place/pagoda"}>
                <Button variant="dark" className="rounded-pill px-4 me-1">
                  Pagoda
                </Button>
              </Link>
              <Link to={"/list/place/nature"}>
                <Button variant="dark" className="rounded-pill px-4 me-1">
                  Nature
                </Button>
              </Link>
              <Link to={"/list/place/beach"}>
                <Button variant="warning" className="rounded-pill px-4">
                  Beach
                </Button>
              </Link>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          There are {beachData.length} items
        </p>
      </Container>
      <Container>
        <Row>
          {beachData.map((fd, i) => {
            return <Card xs={6} sm={3} key={i} data={fd} />;
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Beach;
