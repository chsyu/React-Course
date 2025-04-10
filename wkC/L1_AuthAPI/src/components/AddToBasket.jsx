import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "@/redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function AddToBasket({ product, qty }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setShowToast(true); // 顯示 toast
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
    // 2 秒後自動關閉 toast
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button className="btn btn-primary px-8 py-5" onClick={addToCart}>
        <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
        <span className="font-thin ml-3">ADD TO BASKET</span>
      </button>
      {showToast && (
        <div className="toast toast-end">
          <div className="alert">
            <span>
              {qty} {qty > 1 ? "pieces" : "piece"} of {product.name} {qty > 1 ? "have" : "has"} been added to your cart.
            </span>
          </div>
        </div>
      )}
    </>

  );
}