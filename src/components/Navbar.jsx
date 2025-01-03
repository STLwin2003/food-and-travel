import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NNavbar = () => {
  return (
    <>
      <Navbar
        sticky="top"
        fixed="top"
        bg="light"
        data-bs-theme="light"
        key={"lg"}
        expand={"lg"}
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="/home" className="">
            {" "}
            <Link
              to={"/home"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="brand text-decoration-none text-dark fs-1"
            >
              SMTM
            </Link>
          </Navbar.Brand>

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className=""
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Link
                  to={"/home"}
                  className="brand text-decoration-none text-warning"
                >
                  SMTM
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 fs-00 pe-3 fs-5">
                <Nav.Link
                  href="/home"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/list/food"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Food
                </Nav.Link>
                <Nav.Link
                  href="/list/place"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Place
                </Nav.Link>

                {/* <NavDropdown
                  title="Collections"
                  id="offcanvasNavbarDropdown-expand-lg"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="/street_food"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Street Food
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/cafe_shop"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Cafe Shop
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/pagoda"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Pagoda
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/restaurant"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Restaurant
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/nature"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Natural Resorts
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/beach"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Beach
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-auto">
            <Link to={"/search"}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fs-3 text-dark opacity-75 mt-2 text-decoration-none mx-3"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              />
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="ms-auto"
          />
        </Container>
      </Navbar>
    </>
  );
};
export default NNavbar;
