import ScrollAnimation from "react-animate-on-scroll";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "animate.css";
import contactUs_img from "../../img/contactUs.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <p className="fs-2 text-center mb-5 title1">Get In Touch</p>
          <Row className="mx-auto">
            <Col xs={{ order: 5 }} sm={12} lg={6}>
              <img
                src={contactUs_img}
                alt="contact us img"
                className="w-100 shadow mb-3"
              />
            </Col>
            <Col xs={{ order: 0 }} sm={12} lg={6}>
              <div className="w-75 mx-auto my-4 fs-00">
                <Form>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Name"
                      size="lg"
                      className="fs-6"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      size="lg"
                      className="fs-6"
                      pattern=".+@gmail\.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                      size="lg"
                      className="fs-6"
                      required
                    />
                  </Form.Group>
                </Form>
                <Link to={"mailto:shinthantlwin70@gmail.com"}>
                  <Button className="fs-6" variant="dark" size="lg">
                    Send Message
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
    </div>
  );
};
export default ContactUs;
