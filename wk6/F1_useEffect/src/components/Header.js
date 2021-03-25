import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { PAGE_TITLE_SET, PAGE_CONTENT_SET, NAVBAR_ITEM_SET } from "../utils/constants"
import { StoreContext } from "../store"
import products from "../json/products.json"
import CartSummary from "./CartSummary";

export default function Header({ title }) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      console.log(`Before dispatch(title), title = ${title}`)
      dispatch({
         type: PAGE_TITLE_SET,
         payload: "NORDIC NEST Shopping Cart"
      });
      console.log(`After dispatch(title), title = ${title}`)
      dispatch({
         type: PAGE_CONTENT_SET,
         payload: products,
      });
      dispatch({
         type: NAVBAR_ITEM_SET,
         payload: "",
      });
   };

   useEffect(()=>{
      console.log(`In useEffect, title = ${title}`)
   }, [title])

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
      </header>
   );
}