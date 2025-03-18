import { useDispatch } from "react-redux";
import { addCartItems } from "@/redux/cartSlice";

export default function AddToBasket({ product, qty }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

   return (
     <button className="btn btn-primary px-8 py-5" onClick={addToCart}>
       Add To Basket
     </button>
   );
 }