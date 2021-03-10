import { Card } from "antd"

export default function ProductItem( { product }) {
    return (
        <Card className="bg-gray product-item">
            <a href="/">
                <img 
                    style={{width: '100%'}}
                    src={product.image}
                    alt={product.name} />
            </a>
            <div className="product-item-info">
                <h6 className="product-item-category">
                    {product.category}
                </h6>
                <h2 className="product-item-name">
                    {product.name}
                </h2>
                <p className="product-item-description">
                  {product.description}
                </p>
                <div className="product-item-more">
                    <a href="/" className="product-item-link">
                        See More ...
                    </a>
                    <span
                        className="text-gray">
                        USD {product.price}.00
                    </span>
                </div>
            </div>
        </Card>
    );
  }
  