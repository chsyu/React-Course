import { Modal, Button } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store"
import { CartIcon } from "./Icons";

export default function CartModal({isModalVisible, toggleModal}) {
   const { state: { cartItems } } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   
   return (
      <Modal 
         title="Shopping Bag" 
         visible={isModalVisible} 
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.map(item=><p key={item.id}>{item.name} x {item.qty}</p>)}
         <Button 
            className="cart-modal-btn" 
            type="primary"
         >
            <CartIcon size={20} />
            <span style={{marginLeft: 12}}>Start Checkout</span>
         </Button>
      </Modal>
   );
}