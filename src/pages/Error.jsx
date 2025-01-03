import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
          <div>
            <h1>404</h1>
            <p>Page is Not Found</p>
            <Link to={"/home"} className="text-decoration-none text-success">
              <p>return to home</p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;
