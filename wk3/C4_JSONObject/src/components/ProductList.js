import ProductItem from "./ProductItem";
import products from "../json/products.json";

export default function ProductList() {
  return (
    <div className="row">
      {products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}

