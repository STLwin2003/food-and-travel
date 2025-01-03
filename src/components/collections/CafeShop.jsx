import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import cafe_img from "../../img/cafe1.jpg";

const CafeShop = () => {
  return (
    <>
      {" "}
      <ScrollAnimation animateIn="fadeIn">
        <div fluid className="bg-brown">
          <Row className="text-center g-0">
            <Col xs={12} sm={6}>
              <div className="">
                <img src={cafe_img} alt="" className="w-100" />
              </div>
            </Col>

            <Col xs={12} sm={6} className="my-auto">
              <div className="mt-4 px-4">
                <p className="fs-1 mt-2 title1">Cafe Shop</p>
                <p className="fst-italic fs-00 fs-6">Quiet, Cozy and Elegant</p>
                <p className="fs-6 fs-00">
                  Cafe shops are the best places for studying, reading and
                  meeting our own soul. Here is the collection of best cafe
                  shops in town.
                </p>
                <Link to={"/cafe_shop"} className="text-decoration-none">
                  <p
                    className="text-center fs-6 fs-000 text-success"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Explore More
                  </p>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    </>
  );
};
export default CafeShop;
