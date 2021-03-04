export default function ProductItem( { product }) {
    return (
      <section className="product pt-4 p-md-3 p-lg-4">
        <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
                <img className="w-100"
                    src={product.image}
                    alt={product.name} />
            </a>
            <div className="p-4">
                <h6 className="text-white opacity-2 mb-1">
                    {product.category}
                </h6>
                <h5 className="text-white mb-3">
                    {product.name}
                </h5>
                <p className="text-white opacity-3 mb-3">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between">
                    <a href="/" className="text-decoration-none text-color-1">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span
                        className="text-white opacity-3">
                        USD {product.price}.00
                    </span>
                </div>
            </div>
        </div>
      </section>
    );
  }
  