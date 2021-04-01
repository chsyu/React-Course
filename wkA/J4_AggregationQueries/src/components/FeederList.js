import { Row, Col } from "antd";
import FeederItem from "./FeederItem";
import { getJSON } from "../api";
import jsonInfoProducts from "../json/jsonInfoProducts.json";

export default function FeederList() {
  return (
    <Row gutter={[32, 32]}>
    {jsonInfoProducts.map(json => (
        <Col 
          key={json.name} 
          lg={{ span: 12 }} 
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <FeederItem 
            products={getJSON(json.url)}
            name={json.name}
         />
        </Col>
      ))}
    </Row>
  );
}

