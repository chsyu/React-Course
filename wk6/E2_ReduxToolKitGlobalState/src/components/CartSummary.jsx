import { useState } from "react";
import { CartIcon } from "@/components/Icons";

function CartSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav
      onClick={toggleModal}
      className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
    >
      <div className="indicator">
        <span className="indicator-item badge badge-primary text-white">5</span>
        <CartIcon size={32} color="currentColor" />
      </div>
      <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
    </nav>
  );
}

export default CartSummary;