import React from 'react';
import './App.css';
import products from "./json/data.json";

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
}

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="hideLarge" onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3 className="sidebar-header">Shopping Categories</h3>
        <button className="sidebar-close-button hideLarge" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                  <div className="product-name">
                    <a href="product.html">{product.category}</a>
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
        </div>
      </main>
      <footer className="footer">All right reserved.</footer>
    </div>
  );
}

export default App;
