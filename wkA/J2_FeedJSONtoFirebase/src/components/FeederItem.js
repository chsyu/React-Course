import { Card, Button } from "antd";
import { feedProducts } from "../api"


export default function FeederItem({name, products}) {
   return (
      <Card className="bg-gray product">
         <h2 className="product-name">Feed {name} JSON data to FireStore</h2>
         <Button
            className="cart-modal-btn"
            type="primary"
            onClick={() => feedProducts(name, products)}
         >
            <span style={{ marginLeft: 12 }}>Feed</span>
         </Button>
      </Card>
   );
}