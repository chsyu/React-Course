import { Button } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToCart({ product, qty }) {
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
    <Button type="primary" className="btn-tocar" onClick={addToCart}>
      Add To Shopping Bag
    </Button>
  );
}
