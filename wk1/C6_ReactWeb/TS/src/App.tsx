import React from 'react';
import './App.css';
import slimShirt from './images/d1.jpg'

const openMenu = () => {
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  sidebar.classList.add("open");
}
const closeMenu = () => {
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  sidebar.classList.remove("open")
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
        <button className="sidebar-close-button hideLarge" onClick={closeMenu}>x</button>
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
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src={slimShirt} alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reserved.
    </footer>
    </div> 
  );
}

export default App;
