import { Modal, Button, Select, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";
import { useUserInfo } from "../../react-query";

import styles from "./basketmodal.module.css"
import { CartIcon } from "../Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;

export default function BasketModal({ isOpen, toggleModal }) {
   const { token: { colorTextBase } } = theme.useToken();
   const { data: userInfo } = useUserInfo();

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const navigate = useNavigate();

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const checkoutHandler = () => {
      handleCancel();
      if (userInfo?.name)
         navigate("/shopping/shipping")
      else
         navigate("/auth/login?redirect=/shopping/shipping");
   }

   return (
      <Modal
         title="Shopping Basket"
         open={isOpen}
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.length === 0 ? (
            <div>Cart is empty</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className={styles.item}>
                  <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}>
                     <div onClick={handleCancel}>
                        <img className={styles.image} src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className={styles.content}>
                     <div className={styles.name}>{item.name}</div>
                     <div>
                        Qty: {"   "}
                        <Select
                           defaultValue={item.qty}
                           onChange={(qty) => dispatch(addCartItems({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              countInStock: item.countInStock,
                              qty,
                           }))}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  </div>
                  <div>
                     <div className={styles.price}>
                        ${item.price * item.qty}
                     </div>
                     <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        x
                     </div>
                  </div>
               </li>
            ))
         )}
         <div className={styles.wrap}>
            Total
            <div className={styles.totalPrice}>${getTotalPrice()}</div>
         </div>
         <Button
            className={styles.btn}
            type="primary"
            onClick={checkoutHandler}
         >
            <CartIcon color={"#ffffff"} />
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
         </Button>
      </Modal>
   );
}