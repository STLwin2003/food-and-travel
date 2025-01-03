import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import InfoBox from "../components/detail page/InfoBox";
import { useParams } from "react-router-dom";
import allData from "../data/allData";
import Card from "../components/cards/Card";

const PlaceDetail = () => {
  const { id } = useParams();
  const detail = allData.find((fd) => fd.id == id);

  console.log(detail);

  const data = allData.filter((e) => e.type === "place");
  return (
    <div>
      <Navbar />
      <div fluid>
        <Container>
          <Row className="g-0">
            <Col>
              <div className="mb-3">
                <img src={detail.picture1} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mb-3">
          <Row className="g-0">
            <Col>
              <div>
                <p className="fs-1 fw-bold title1 text-uppercase">
                  {detail.title}
                </p>
                <p className="fs-5 fs-000 fw-bold text-dark">
                  {detail.sub_title}
                </p>

                <p className="fs-000 fs-6 text-decoration-underline">
                  {detail.date}
                </p>
                <p className="fs-5 lh-base fs-00">{detail.bio}</p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mb-5">
          <Row>
            <Col xs={0} sm={1}></Col>
            <Col xs={12} sm={10}>
              <div>
                <Row className="g-0">
                  <Col xs={12} sm={6}>
                    <div>
                      <img src={detail.picture2} alt="" className="w-100" />
                    </div>
                  </Col>
                  <Col xs={12} sm={6} className="my-auto">
                    <div className="p-3">
                      <p className="fs-4 fw-medium fs-000">Detail and Option</p>
                      <p className="fs-6 lh-lg fs-00">{detail.content}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={0} sm={1}></Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row className="g-0">
            <Col xs={12} sm={7}>
              <div>
                <img src={detail.picture3} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs={12} sm={5}>
              <div className="px-3">
                {" "}
                <InfoBox detail={detail} />
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        {/* <Container className="my-5">
          <hr />
          <p className="fs-000 fs-3 text-decoration-underline">
            Similar Places
          </p>
          {
            <Row>
              {data.map((e, i) => {
                return <Card xs={3} sm={3} key={i} data={e} />;
              })}
            </Row>
          }
        </Container> */}
        {}
      </div>
      <Footer />
    </div>
  );
};

export default PlaceDetail;
