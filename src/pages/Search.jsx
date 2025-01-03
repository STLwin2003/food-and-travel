import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import allData from "../data/allData";
import Card from "../components/cards/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(allData);
  const [finalData, setFinalData] = React.useState([]);
  const [after, setAfter] = React.useState(false);

  const RatingItem = allData.filter((e) => e.rating === true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    showData(value);
  };

  const showData = () => {
    const data = filteredData.filter((e) => {
      return e.title.toLowerCase().includes(query.toLowerCase());
    });
    console.log(data);
    setFilteredData(data);

    setFinalData(filteredData);
  };

  const AfterInput = () => {
    showData();
    setFilteredData(allData);
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <Container>
          <div className="my-3">
            <Row>
              <Col xs={8} className="mx-auto">
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    id="search"
                    autoFocus
                    aria-describedby="passwordHelpBlock"
                    placeholder="Search the food or place"
                    size="lg"
                    className="rounded-pill border-2 border-dark p-3 px-5 fs-6"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        AfterInput();
                        setAfter(true);
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="position-absolute translate-middle top-50 start-0 ms-4 fs-4 text-secondary"
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="position-absolute translate-middle top-50 end-0  fs-2 text-dark"
                    onClick={() => {
                      setQuery("");
                      window.location.reload(false);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container>
          {after ? (
            <p className="text-decoration-underline fs-5 fs-000">
              Search result for <span className="text-success">{query}</span>
            </p>
          ) : (
            <p className="d-none">Search result for</p>
          )}
          <Row>
            {finalData.map((fd, i) => {
              return <Card xs={6} sm={3} key={i} data={fd} />;
            })}
          </Row>
        </Container>
        <Container>
          <hr />
          <div className="mb-5">
            <p className="fs-5 fw-medium fs-000  text-decoration-underline">
              Top Picks For You
            </p>

            <Row>
              {RatingItem.map((fd, i) => (
                <Card sm={3} xs={6} key={i} data={fd} />
              ))}
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};
export default Search;
