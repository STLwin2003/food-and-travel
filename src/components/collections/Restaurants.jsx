import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import restaurant_img from "../../img/restaurant.jpg";

const Restaurants = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <div fluid className="mt-2 bg-brown">
          <Row className="g-0">
            <Col xs={12} sm={6} className="my-auto">
              <div className="text-center mt-3 px-4">
                <p className="fs-2 title1">Finest Restaurants</p>
                <p className="fs-00 fst-italic">Menu, Service and Hygienic</p>
                <p className="fs-6 fs-00">
                  Restaurants play an important role in our daily life. They
                  also represents the standard of our society. Here is the
                  collection of best restaurants with great services and
                  reputation.
                </p>
                <Link to={"/restaurant"} className="text-decoration-none">
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
            <Col xs={12} sm={6}>
              <div>
                <img src={restaurant_img} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default Restaurants;
