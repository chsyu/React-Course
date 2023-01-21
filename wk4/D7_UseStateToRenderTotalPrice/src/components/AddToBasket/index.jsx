import { Button } from "antd"
import styles from "./addtobasket.module.css"

export default function AddToCart() {

  return (
    <Button type="primary" className={styles.btn}>
      <img className={styles.image} src="/images/basket.svg" />Add To Basket
    </Button>
  );
}
