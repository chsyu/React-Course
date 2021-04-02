import { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import ProductItem from "./ProductItem";
import { setPage } from "../actions";
import { StoreContext } from "../store";
import { getTitle } from "../utils";

export default function ProductList() {
  const { state: { page: { products }, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

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

