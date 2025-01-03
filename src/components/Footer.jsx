import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import allData from "../data/allData";

const recent = allData.filter((e) => e.recent === true);
const rating = allData.filter((e) => e.rating === true);

const Footer = () => {
  return (
    <footer className="fs-00">
      <Container fluid className="bg-dark text-light p-5">
        <Row className="text-center g-0">
          <Col xs={12} sm={3}>
            <div>
              <Link
                to={"/home"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p className="fs-2 fw-medium brand">SarMalTwarMal</p>
              </Link>
              <p className="fs-6 fs-00">
                Let's explore the best local foods and beautiful places to
                travel in Pathein. Let us guide you to different foods and
                estonishing places with love and taste.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000 text-decoration-underline">
                Recent
              </p>
              {recent.map((e, i) => {
                return (
                  <Link
                    to={
                      e.type === "food"
                        ? `/food_detail/${e.id}`
                        : `/place_detail/${e.id}`
                    }
                    key={i}
                    className="text-decoration-none text-light"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <p>{e.title}</p>
                  </Link>
                );
              })}
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000 text-decoration-underline">
                Popular
              </p>
              {rating.map((e, i) => {
                return (
                  <Link
                    to={
                      e.type === "food"
                        ? `/food_detail/${e.id}`
                        : `/place_detail/${e.id}`
                    }
                    key={i}
                    className="text-decoration-none text-light"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <p>{e.title}</p>
                  </Link>
                );
              })}
            </div>{" "}
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000 text-decoration-underline">
                Collections
              </p>
              <Link
                to={"/street_food"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Street Food</p>
              </Link>
              <Link
                to={"/cafe_shop"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Cafe Shop</p>
              </Link>
              <Link
                to={"/pagoda"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Pagoda</p>
              </Link>
              <Link
                to={"/restaurant"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Restaurant</p>
              </Link>
              <Link
                to={"/nature"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Nature</p>
              </Link>
              <Link
                to={"/beach"}
                className="text-decoration-none text-light"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p>Beach</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
