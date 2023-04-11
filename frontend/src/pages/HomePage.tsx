 import { Row, Col } from "react-bootstrap";
import { sampleProducts } from "../data";

export default function HomePage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </Col>
      ))}
    </Row>
  );
}
