import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ sm, xs, data }) => {
  return (
    <Col
      xs={xs}
      sm={sm}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Link
        to={
          data.type === "food"
            ? `/food_detail/${data.id}`
            : `/place_detail/${data.id}`
        }
        className="text-decoration-none"
      >
        <div>
          <img src={data.picture3} alt="" className="w-100" />
          <div className="text-center text-dark mb-3">
            <span className="fs-7 mt-1 fs-000">{data.date}</span>
            <span className="fs-6 fs-00 d-block">{data.title}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};
export default Card;
