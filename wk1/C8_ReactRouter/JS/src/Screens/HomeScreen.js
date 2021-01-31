import React from 'react';
import { Link } from "react-router-dom";
import products from '../json/data.json';

const HomeScreen = () => {
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <img className="product-image" src={product.image} alt="product" />
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;