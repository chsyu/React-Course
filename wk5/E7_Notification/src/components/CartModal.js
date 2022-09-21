import { Modal, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartIcon } from "./Icons";
import { addCartItems, removeCartItems } from "../redux/cartSlice";
import { selectCartItems } from "../redux/cartSlice";
const { Option } = Select;

export default function CartModal({ isModalVisible, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   return (
      <Modal
         title="Shopping Bag"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.length === 0 ? (
            <div>Cart is empty</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`}>
                     <div className="cart-image" onClick={handleCancel}>
                        <img src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className="cart-item-content">
                     <div className="cart-name">{item.name}</div>
                     <div className="product-qty">
                        Qty: {"   "}
                        <Select
                           defaultValue={item.qty}
                           className="select-style"
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
                  <div className="cart-item-end">
                     <div className="cart-price">
                        ${item.price * item.qty}
                     </div>
                     <div className="cart-item-delete" onClick={() => dispatch(removeCartItems(item.id))}>
                        x
                     </div>
                  </div>

               </li>
            ))
         )}
         <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div>
         <Button
            className="cart-modal-btn"
            type="primary"
         >
            <CartIcon size={20} />
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
         </Button>
      </Modal>
   );
}