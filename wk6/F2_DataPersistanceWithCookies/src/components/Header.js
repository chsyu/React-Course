import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { SET_PAGE_TITLE, SET_PAGE_CONTENT, SET_NAVBAR_ACTIVEITEM } from "../utils/constants"
import { StoreContext } from "../store"
import products from "../json/products.json"
import CartSummary from "./CartSummary";

export default function Header({ title }) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      dispatch({ 
         type: SET_PAGE_TITLE, 
         payload: "NORDIC NEST Shopping Cart" 
      });
      dispatch({ 
         type: SET_PAGE_CONTENT, 
         payload: products, 
      });    
      dispatch({ 
         type: SET_NAVBAR_ACTIVEITEM, 
         payload: "/",
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