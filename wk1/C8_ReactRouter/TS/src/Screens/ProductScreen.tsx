import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import products from "../json/data.json";

interface IParams { id: string };
interface IPRODUCT {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
}

function ProductScreen({ match }: RouteComponentProps<IParams>) {
  const product = products.find(
    (x) => x._id === match.params.id
  ) as IPRODUCT;
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div></div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: </li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
