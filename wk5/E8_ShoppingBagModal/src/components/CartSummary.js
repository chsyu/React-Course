import { useState, useContext } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import CartModal from "./CartModal";
import { StoreContext } from "../store"

export default function CartSummary() {

  const { state: { cartItems } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  
  let count = 0;
  if(cartItems.length > 0) {
    cartItems.map(item => {
      count += item.qty;
    })
  }

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} style={{ color: 'white', backgroundColor: '#6366F2' }}>
          <CartIcon />
        </Badge>
        <p className="cart-summary-text"> Shopping bag </p>
        <CartModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </nav>

    </>
  );
}
