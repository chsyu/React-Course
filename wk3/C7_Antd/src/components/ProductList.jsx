import { Row, Col } from "antd";

import ProductItem from "./ProductItem";
import products from "../json/products.json";

export default function ProductList() {
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
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}

