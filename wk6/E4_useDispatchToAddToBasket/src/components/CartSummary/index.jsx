import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import styles from "./cartsummary.module.css"
import { selectCartItems } from "../../redux/cartSlice";

export default function CartSummary() {
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0) ?
  cartItems.reduce((sum, item) => sum + item.qty, 0)
  : 0;
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className={styles.cartSummary} >
      <Badge count={count} color="#6366F2" style={{color: 'white'}}>
        <CartIcon size={32} />
      </Badge>
      <p className={styles.cartText}> Shopping bag </p>
    </nav>
  );
}
