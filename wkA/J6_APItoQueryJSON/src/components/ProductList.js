import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import ProductItem from "./ProductItem";
import { StoreContext } from "../store";

export default function ProductList() {
  const { state: { page: { products } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  return (
    <>
      {!products
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {products.map(product => (
              <Col
                key={product.id}
                md={{ span: 12 }}
                xxl={{ span: 8 }}
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

