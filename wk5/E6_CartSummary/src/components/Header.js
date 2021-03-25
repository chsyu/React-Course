import { useContext } from "react";
import { Link } from "react-router-dom"
import { SET_PAGE_TITLE, SET_PAGE_CONTENT, SET_NAVBAR_ACTIVEITEM } from "../utils/constants"
import { StoreContext } from "../store"
import NavBar from "./NavBar";
import products from "../json/products.json";

export default function Header({title}) {
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

   return (
      <div className="header">
         <div onClick={onClickHeader}>
            <Link to="/">
               <h1 className="header-title">
                  {title}
               </h1>
            </Link>

            <p
               className="header-slogan">
               An example made by Create-React-App.
            </p>
         </div>

         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}