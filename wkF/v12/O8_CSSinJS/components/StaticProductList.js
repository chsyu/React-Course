import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

export default function StaticProductList({ staticProducts }) {

  return (
    <Row gutter={[32, 32]}>
      {staticProducts.map(product => (
        <Col
          key={product.id}
          sm={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}

