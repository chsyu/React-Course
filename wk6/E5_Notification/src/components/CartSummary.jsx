import { useState } from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "@/components/Icons";
import { selectCartItems } from "@/redux/cartSlice";

function CartSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0) ?
              cartItems.reduce((sum, item) => sum + item.qty, 0)
              : 0;
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav
      onClick={toggleModal}
      className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
    >
      <div className="indicator">
        {count > 0 && <span className="indicator-item badge badge-primary text-white">{count}</span>}
        <CartIcon size={32} color="currentColor" />
      </div>
      <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
    </nav>
  );
}

export default CartSummary;