import FoodCard from "../cards/Card";
import { Container, Row } from "react-bootstrap";
import allData from "../../data/allData";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Recent = () => {
  const recent = allData.filter((fd) => fd.recent === true);
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <p className="fs-2 pt-3  text-center title1">What's news? </p>
          <Row className="pt-3">
            {recent.map((data, i) => (
              <FoodCard xs={6} sm={3} key={i} data={data} />
            ))}
          </Row>
        </Container>
      </ScrollAnimation>
    </div>
  );
};
export default Recent;
