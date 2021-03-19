import { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
   PAGE_TITLE_SET,
   PAGE_CONTENT_SET,
   NAVBAR_ITEM_SET,
} from "../utils/constants"
import { StoreContext } from "../store"

import products from "../json/products.json";
import textile from "../json/tableware.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

export default function NavItem(props) {
   const { children, to, className, activeClassName, onClose } = props

   const { state, dispatch } = useContext(StoreContext);
   const history = useHistory();
   const getJSON = url => {
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
   }

   const onClick = () => {
      dispatch({
         type: PAGE_TITLE_SET,
         payload: children,
      });
      dispatch({
         type: PAGE_CONTENT_SET,
         payload: getJSON(to),
      });
      dispatch({
         type: NAVBAR_ITEM_SET,
         payload: to,
      });
      history.push(to);
      if(onClose) onClose();
   };
   return (
      <div
         onClick={onClick}
         className={`
         ${className} 
         ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
         {children}
      </div>
   );
}