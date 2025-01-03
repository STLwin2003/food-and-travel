import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import floatMarket from "../../data/floatMarket";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Main = () => {
  return (
    <div fluid className="my-2 ">
      <Row className="text-center g-0 my-2">
        <Col xs={12} sm={6}>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-100"
            />
          </div>
        </Col>
        <Col xs={12} sm={6} className="my-auto">
          <div className="px-4">
            <p className="fs-1 mt-2 title1">Pathein Float Market</p>
            <p className="fs-00 fst-italic">
              Authentic, Flavorful and Exciting
            </p>
            <p className="fs-6 fs-00">
              Food markets are reflections of local traditions and lifestyles.
              One of best places to try local foods and see local people is
              Pathein Float Market. We can find various Burmese cuisine and
              unique street foods.Here is some of the famous street foods that
              can be founded in float market.
            </p>
            <Link
              to={"https://maps.app.goo.gl/qtxipZCvv9KNSfv8A"}
              target="_blank"
              className=" text-decoration-none"
            >
              <p className="fs-5 fs-000 text-warning fst-italic">Visit Us</p>
            </Link>
          </div>
        </Col>
      </Row>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 bg-brown mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture1} alt="" className="w-100" />
                </div>
              </Col>
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item1}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item2}</p>
                </div>
              </Col>
              <Col sm={{ order: "first" }}>
                <div>
                  <img src={floatMarket.picture2} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }}>
                <div>
                  <img src={floatMarket.picture3} alt="" className="w-100" />
                </div>
              </Col>
              <Col sm={{ order: "first" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item3}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item4}</p>
                </div>
              </Col>
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture4} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 bg-brown mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture5} alt="" className="w-100" />
                </div>
              </Col>
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item5}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item6}</p>
                </div>
              </Col>
              <Col sm={{ order: "first" }}>
                <div>
                  <img src={floatMarket.picture6} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }}>
                <div>
                  <img src={floatMarket.picture7} alt="" className="w-100" />
                </div>
              </Col>
              <Col sm={{ order: "first" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item7}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item8}</p>
                </div>
              </Col>
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture8} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 bg-brown mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture9} alt="" className="w-100" />
                </div>
              </Col>
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item9}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item10}</p>
                </div>
              </Col>
              <Col sm={{ order: "first" }}>
                <div>
                  <img src={floatMarket.picture10} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Row className="g-0 mb-2">
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col sm={{ order: "last" }}>
                <div>
                  <img src={floatMarket.picture11} alt="" className="w-100" />
                </div>
              </Col>
              <Col sm={{ order: "first" }} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item11}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row className="text-center g-0">
              <Col xs={6} sm={6} className="my-auto">
                <div className="px-4">
                  <p className="fs-6 fs-000 fw-bold">{floatMarket.item12}</p>
                </div>
              </Col>
              <Col xs={6} sm={6}>
                <div>
                  <img src={floatMarket.picture12} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
};

export default Main;
