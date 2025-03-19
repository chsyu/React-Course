import { Basket } from "@/components/Icons";

export default function AddToBasket() {

  return (
    <button className="btn btn-primary px-8 py-5">
      <Basket size={24} color="currentColor" />
      <span className="font-thin ml-3">ADD TO BASKET</span>
    </button>
  );
}