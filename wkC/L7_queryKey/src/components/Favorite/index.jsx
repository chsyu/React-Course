import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import { FavoriteIcon } from "../Icons";
import styles from "./favorite.module.css";

export default function Favorite() {
  const {
    token: { colorTextBase },
  } = theme.useToken();

  return (
    <div className={styles.favorite}>
      <Badge count={5} color="#F19D38" style={{ color: "white" }}>
        <FavoriteIcon color={colorTextBase} />
      </Badge>
    </div>
  );
}
