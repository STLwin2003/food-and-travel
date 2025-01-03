import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Comments = () => {
  return (
    <div>
      <Row className="mb-5 g-0">
        <Col xs={0} sm={2}></Col>
        <Col xs={12} sm={8}>
          <div className="text-center fs-000">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your review"
                  className="rounded-5 p-3"
                />
              </Form.Group>
              <Button variant="warning">Submit</Button>
            </Form>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </div>
  );
};

export default Comments;
