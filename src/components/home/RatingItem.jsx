import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "../cards/Card";
import allData from "../../data/allData";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const RatingItem = () => {
  const RatingItem = allData.filter((fd) => fd.rating === true);

  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <div className="bg-brown">
          <Container fluid className="mt-5 py-5 bg-brown">
            <p className="fs-2 py-3 text-center title1">Top Popular Items</p>

            <Row className="g-3">
              <Col className="text-center mb-3" sm={3} xs={12}>
                <div className="px-3">
                  <p className="fs-5 fs-000">Fans' Favorite</p>
                  <p className="fs-6 fs-00 ">
                    Here is the list of food and place items that have the most
                    rating in our collections.
                  </p>
                  <Button
                    variant="dark"
                    size="lg"
                    className="rounded-pill fs-000 fs-6"
                    href="/list"
                  >
                    Explore More
                  </Button>
                </div>
              </Col>
              {RatingItem.map((fd, i) => (
                <Card sm={2} xs={6} key={i} data={fd} />
              ))}
            </Row>
          </Container>
        </div>
      </ScrollAnimation>
    </>
  );
};
export default RatingItem;
