import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
};
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
};

function App() {
  return (
    <BrowserRouter>
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
          <button
            className="sidebar-close-button hideLarge"
            onClick={closeMenu}
          >
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
            <Switch>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </Switch>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
