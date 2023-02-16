import { Row, Col, Skeleton } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products, isLoading }) {
  return (
    <Row gutter={[32, 32]}>
      {products.map(product => (
        <Col
          key={product.id}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <Skeleton loading={isLoading} active>
            <ProductItem product={product} />
          </Skeleton>
        </Col>
      ))}
    </Row>
  );
}

