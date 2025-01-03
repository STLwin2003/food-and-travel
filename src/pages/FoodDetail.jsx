import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import InfoBox from "../components/detail page/InfoBox";
import React from "react";
import footData from "../data/allData";
import ScrollAnimation from "react-animate-on-scroll";

const FoodDetail = () => {
  const { id } = useParams();

  const detail = footData.find((fd) => fd.id == id);

  return (
    <div>
      <Navbar />
      <div className="container" fluid>
        <div className="mt-2">
          <Row className="g-0">
            <Col xs={12} sm={6}>
              <img className="w-100" src={detail.picture1} alt="" />
            </Col>
            <Col className="my-auto">
              <div className="px-5 pt-3">
                <p className="fs-1 fw-semibold title1 text-uppercase">
                  {detail.title}
                </p>
                <p className="fs-5 fs-000 fw-medium">{detail.sub_title}</p>

                <p className="fs-6 fs-00">{detail.bio}</p>

                <p className="fs-000 fs-6 text-decoration-underline">
                  {detail.date}
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <Container className="mt-5">
          <Row>
            <Col xs={0} sm={1}></Col>
            <Col xs={12} sm={10}>
              {" "}
              <div>
                <Row className="g-0">
                  <Col xs={12} sm={6} className="my-auto">
                    <div>
                      <p className="fs-4 fw-medium fs-000">Taste and Opinion</p>
                      <p className="fs-6 lh-lg fs-00 pe-3">{detail.content}</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div>
                      <img src={detail.picture2} alt="" className="w-100" />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="g-0 my-5">
                  <Col xs={12} sm={6}>
                    <div>
                      <img src={detail.picture3} alt="" className="w-100" />
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="px-3">
                      {" "}
                      <InfoBox detail={detail} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={0} sm={1}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default FoodDetail;
