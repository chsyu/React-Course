'use client'
import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import { useSelector } from "react-redux";

import { CartIcon } from "./Icons";
import CartModal from "./CartModal";
import { selectCartItems } from "../redux/cartSlice";

export default function CartSummary() {
  const cartItems = useSelector(selectCartItems);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const count = (cartItems.length > 0) ?
  cartItems.reduce((sum, item) => sum + item.qty, 0)
  : 0;

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} className='cart-summary-outlined' >
          <CartIcon />
        </Badge> 
        <p className="cart-summary-text"> Shopping bag </p>         
      </nav>
      <CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
}
