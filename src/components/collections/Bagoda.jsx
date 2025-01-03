import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import pagoda_img from "../../img/pagoda.jpg";

const Bagoda = () => {
  return (
    <div fluid className="my-2">
      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0">
          <Col xs={12} sm={6}>
            <div>
              <img src={pagoda_img} alt="" className="w-100" />
            </div>
          </Col>

          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-4">
              <p className="fs-2 title1">Famous Pagodas</p>
              <p className="fst-italic fs-00">Ancient, Iconic and Cultural</p>
              <p className="fs-6 fs-00">
                Pagodas have historical significance of our tradition and
                culture. People often visit pagodas to explore local historal
                figures and different architectural heritage. We made a
                collection of pagodas that are ancient and unique around
                Pathein.
              </p>
              <Link to={"/pagoda"} className="text-decoration-none">
                <p
                  className="text-center fs-6 text-success fs-000"
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
      </ScrollAnimation>
    </div>
  );
};
export default Bagoda;
