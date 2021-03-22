import { useContext } from "react";
import { Link } from "react-router-dom"
import { PAGE_TITLE_SET, PAGE_CONTENT_SET, NAVBAR_ITEM_SET } from "../utils/constants"
import { StoreContext } from "../store"
import NavBar from "./NavBar";
import products from "../json/products.json"
import CartSummary from "./CartSummary";

export default function Header({ title }) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      dispatch({
         type: PAGE_TITLE_SET,
         payload: "NORDIC NEST Shopping Cart"
      });
      dispatch({
         type: PAGE_CONTENT_SET,
         payload: products,
      });
      dispatch({
         type: NAVBAR_ITEM_SET,
         payload: "",
      });
   };

   return (
      <header className="header">
         <div className="header-wrap">
            <div className="header-text" onClick={onClickHeader}>
               <Link to="/">
                  <h1 className="header-title" >
                     {title}
                  </h1>
               </Link>
               <p
                  className="header-slogan">
                  An example made by Create-React-App.
               </p>
            </div>
            <CartSummary />
         </div>

         <hr className="hr-header-line" />
         <NavBar />
      </header>
   );
}