import { Row, Col } from "antd";
import FeederItem from "./FeederItem";
import { getJSON } from "../api";
import jsonInfo from "../json/jsonInfo.json";

export default function FeederList({products}) {
  return (
    <Row gutter={[32, 32]}>
    {jsonInfo.map(json => (
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

