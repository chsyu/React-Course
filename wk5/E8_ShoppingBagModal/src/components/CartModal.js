import { Modal } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store"

export default function CartModal({isModalVisible, toggleModal}) {
   const { state: { cartItems } } = useContext(StoreContext);
   const handleOk = () => toggleModal(!isModalVisible);
   const handleCancel = () => toggleModal(!isModalVisible);
   
   return (
      <Modal 
         title="Shopping Bag" 
         visible={isModalVisible} 
         onOk={handleOk} 
         onCancel={handleCancel}
         okText="Checkout Now"
         cancelText="Still Shopping"
      >
         {cartItems.map(item=><p key={item.id}>{item.name} x {item.qty}</p>)}
      </Modal>
   );
}