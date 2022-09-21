import React from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { CartIcon } from "./Icons";
import { selectCartItems } from "../redux/cartSlice";

export default function CartSummary() {
  const [isOpen, setIsOpen] = React.useState(false)
  const cartItems = useSelector(selectCartItems);

  const toggleModal = () => setIsOpen(!isOpen);

  const count = (cartItems.length > 0) ?
  cartItems.reduce((sum, item) => sum + item.qty, 0)
  : 0;

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} style={{ color: 'white', backgroundColor: '#6366F2'}}>
          <CartIcon size={32} />
        </Badge> 
        <p className="cart-summary-text"> Shopping bag </p>         
      </nav>
    </>
  );
}
