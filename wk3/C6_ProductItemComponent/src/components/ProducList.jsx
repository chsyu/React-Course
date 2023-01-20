import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="row">
      {products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}

