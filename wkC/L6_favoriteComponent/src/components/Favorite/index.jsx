import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { FavoriteIcon } from "../Icons";
import styles from "./favorite.module.css";
import { selectCartItems } from "../../redux/cartSlice";

export default function Favorite() {
  const {
    token: { colorTextBase },
  } = theme.useToken();
  const cartItems = useSelector(selectCartItems);
  const count =
    cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.qty, 0)
      : 0;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div onClick={toggleOpen} className={styles.favorite}>
      <Badge count={count} color="#F19D38" style={{ color: "white" }}>
        <FavoriteIcon color={colorTextBase} />
      </Badge>
    </div>
  );
}
