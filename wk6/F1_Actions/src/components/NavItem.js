import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";

import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";
import { pageContentsSet, activeNavItemSet } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);
  const getJSON = (url) => {
    switch (url) {
      case "/textile":
        return textile;
      case "/tableware":
        return tableware;
      case "/lighting":
        return lighting;
      case "/cookware":
        return cookware;
      case "/furniture":
        return furniture;
      case "/home-accessories":
        return homeAccessories;
      default:
        return products;
    }
  };

  const onClick = () => {
    pageContentsSet(children, getJSON(to), dispatch);
    activeNavItemSet(to, dispatch);
  };
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
