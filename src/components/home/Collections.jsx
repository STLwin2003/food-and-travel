import CafeShop from "../collections/CafeShop";
import Restaurants from "../collections/Restaurants";
import Pagoda from "../collections/Bagoda";
import StreetFood from "../collections/StreetFood";
import { Col, Row } from "react-bootstrap";
import Nature from "../collections/Nature";
import Beaches from "../collections/Beaches";
const Collections = () => {
  return (
    <>
      <div fluid>
        <p className="fs-2 title1 text-center mt-5">Editor's Choices</p>
        <Row className="g-0">
          <Col xs={12} sm={6}>
            <StreetFood />
          </Col>
          <Col xs={12} sm={6}>
            <CafeShop />
          </Col>
        </Row>
      </div>

      <Pagoda />
      <Restaurants />
      <Nature />
      <Beaches />
    </>
  );
};
export default Collections;
