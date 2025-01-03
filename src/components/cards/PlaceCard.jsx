import { Col } from "react-bootstrap";

const PlaceCard = ({ sm, xs }) => {
  return (
    <Col xs={xs} sm={sm}>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1675979807697-24195c443a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHwxfDB8fHww"
          alt=""
          className="w-100 shadow"
        />
        <p className="fs-5 mt-2">Place Title</p>
      </div>
    </Col>
  );
};
export default PlaceCard;
