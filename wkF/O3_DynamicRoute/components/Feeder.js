import { useContext } from "react";
import { Card, Button } from "antd";
import { feedJSONToFirebase } from "../actions"
import { StoreContext } from "../store";

export default function Feeder() {
   const { state: { feedProducts: { loading } }, dispatch } = useContext(StoreContext);

   return (

      <div className="feed">
         <Card className="feed-item">
            <div className="feed-item__content">
               <h2 className="feed-item__name">Feed JSON data to FireStore</h2>
            </div>
            {loading
               ? (
                  <Button
                     className="cart-modal-btn"
                     type="primary"
                     onClick={() => feedJSONToFirebase(dispatch)}
                     loading
                  >
                     <span style={{ marginLeft: 12 }}>Feed</span>
                  </Button>
               ) : (
                  <Button
                     className="cart-modal-btn"
                     type="primary"
                     onClick={() => feedJSONToFirebase(dispatch)}
                  >
                     <span style={{ marginLeft: 12 }}>Feed</span>
                  </Button>
               )}
         </Card>
      </div>

   );
}

