import { Row, Col, Spin } from "antd";
import ProductItem from "../ProductItem";
import { LoadingOutlined } from '@ant-design/icons';

export default function ProductList({ products, isLoading }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
  return (
    <>
      {isLoading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {products.map(product => (
              <Col
                key={product.id}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
              >
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
        )
      }
    </>
  );
}

