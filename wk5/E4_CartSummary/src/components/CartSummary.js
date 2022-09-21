import React from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";

export default function CartSummary() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={5} style={{ color: 'white', backgroundColor: '#6366F2'}}>
          <CartIcon size={32} />
        </Badge> 
        <p className="cart-summary-text"> Shopping bag </p>         
      </nav>
    </>
  );
}
