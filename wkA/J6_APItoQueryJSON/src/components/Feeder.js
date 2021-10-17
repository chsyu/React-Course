import { Row, Col, Card, Button } from "antd";
import { feedProducts } from "../api"

export default function Feeder() {
   return (
      <Row gutter={[32, 32]}>
         <Col md={{ span: 24 }} >
            <div className="feed">
               <Card className="feed-item">
                  <div className="feed-item__content">
                     <h2 className="feed-item__name">Feed JSON data to FireStore</h2>
                  </div>
                  <Button
                     className="cart-modal-btn"
                     type="primary"
                     onClick={() => feedProducts()}
                  >
                     <span style={{ marginLeft: 12 }}>Feed</span>
                  </Button>
               </Card>
            </div>
         </Col>
      </Row>

   );
}

