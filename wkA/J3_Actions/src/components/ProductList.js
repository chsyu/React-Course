import { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import ProductItem from "./ProductItem";
import { setPage, getTitle } from "../actions"
import { StoreContext } from "../store"

export default function ProductList() {
  const { state: { page: { products }, allProducts, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  useEffect(() => {
      const url = window.location.pathname;
      setPage(dispatch, url ,getTitle(url) )
  }, []);

  return (
    <>
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row gutter={[32, 32]}>
            {products.map(product => (
              <Col
                key={product.id}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 6 }}
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

