import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import street_food_img from "../../img/street_food1.jpg";

const StreetFood = () => {
  return (
    <>
      {" "}
      <ScrollAnimation animateIn="fadeIn">
        <div fluid className="bg-brown">
          <Row className="text-center g-0">
            <Col xs={12} sm={6}>
              <div className="">
                <img src={street_food_img} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs={12} sm={6} className="my-auto">
              <div className="mt-4 px-4">
                <p className="fs-1 mt-2 title1">Street Food</p>
                <p className="fs-00 fst-italic">
                  Fresh, Affordable and Traditional
                </p>
                <p className="fs-6 fs-00">
                  Foods that are affordable and fresh, are street foods. Variety
                  choices of street foods represents our culture and present. We
                  made a collection of street foods that are flavorful and
                  convenient.
                </p>
                <Link to={"/street_food"} className="text-decoration-none">
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
export default StreetFood;
