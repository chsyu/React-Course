import { useEffect, useContext } from "react";

import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { CartIcon } from "./Icons";
import { cartAddItem } from "../actions"

export default function AddToCart({ product, qty }) {
  const { state: { cartItems }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <Button type="primary" className="btn-tocar" onClick={()=>{
      openNotification();
      cartAddItem(product, qty, cartItems, dispatch);
    }}>
      <CartIcon size={20} />
      <span style={{ marginLeft: 12 }}>Add To Shopping Bag</span>
    </Button>
  );
}
