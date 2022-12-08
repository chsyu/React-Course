import Link from 'next/link';

export default function ProductItem({ product }) {
    return (
        <div className="bg-gray product">
            <Link href={`/products/id/${product.id}`}>
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
                    <Link href={`/products/id/${product.id}`} className="product-link">
                        See More ...
                    </Link>
                    <span
                        className="text-gray">
                        USD {product.price}.00
                    </span>
                </div>
            </div>
        </div>
    );
}
