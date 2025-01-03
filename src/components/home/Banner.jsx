import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div fluid>
        <Row className="g-0">
          <Col xs={12} sm={6}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <div className="py-3 text-center">
                <p className="fs-1 fw-semibold brand text-warning  px-5 ">
                  SarMalTwarMal
                </p>
                <p className="fs-5 fs-00 px-5">
                  Let's explore the best local foods and beautiful places to
                  travel in Pathein. Let us guide you to different foods and
                  estonishing places with love and taste. Tap to see all of our
                  food and place collections.
                </p>
                <p className="fs-000 fst-italic text-warning">
                  Food, Culture and Travel -All in One Place
                </p>
                <Link to={"/list"}>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill fs-6 px-5 py-3 fs-00 border-2"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Discover Now
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Banner;
