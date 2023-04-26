import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { FavoriteIcon } from "../Icons";
import styles from "./favorite.module.css";
import { selectUserInfo } from "../../redux/usersSlice";

export default function Favorite() {
  const {
    token: { colorTextBase },
  } = theme.useToken();
  const userInfo = useSelector(selectUserInfo) || {};
  const favorites = userInfo.favorites || [];
  const count = favorites.length;
  const toggleOpen = () => {};

  return (
    <div onClick={toggleOpen} className={styles.favorite}>
      <Badge count={count} color="#F19D38" style={{ color: "white" }}>
        <FavoriteIcon color={colorTextBase} />
      </Badge>
    </div>
  );
}
