import { useContext } from "react";
import { Card } from "antd"
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <Card className="bg-gray product">
            <Link to={`/products/${product.category}/${product.id}`} 
                    onClick={()=>{
                        setProductDetail(dispatch, product.id, 1);
                     }}
            >
                <img
                    style={{ width: '100%' }}
                    src={product.image}
                    alt={product.name} />
            </Link>
            <div className="product-info">
                <h6 className="product-category">
                    {product.category}
                </h6>
                <h2 className="product-name">
                    {product.name}
                </h2>
                <p className="product-description">
                    {product.description}
                </p>
                <div className="product-more">
                    <Link to={`/products/${product.category}/${product.id}`} className="product-link"
                    onClick={()=>{
                        setProductDetail(dispatch, product.id, 1);
                     }}>
                        See More ...
                    </Link>
                    <span
                        className="text-gray">
                        USD {product.price}.00
                    </span>
                </div>
            </div>
        </Card>
    );
}
