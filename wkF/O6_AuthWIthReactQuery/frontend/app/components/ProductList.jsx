import ProductItem from "./ProductItem";

export default function ProductList({ products }) {

  return (
    <div className="product-wrap">
      {products.map(product => (
        <div key={product.id} >
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

