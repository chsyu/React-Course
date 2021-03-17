import { useContext } from "react";
import { Link } from "react-router-dom"
import { PAGE_CONTENT_SET } from "../utils/constants"
import { StoreContext } from "../store"
import NavBar from "./NavBar";

export default function Header({title}) {
   const { dispatch } = useContext(StoreContext);
   const onClickHeader = () => {
      dispatch({ 
         type: PAGE_CONTENT_SET, 
         payload: "NORDIC NEST Shopping Cart" 
      });
   };

   return (
      <div className="header" onClick={onClickHeader}>
         <Link to="/">
            <h1 className="header-title">
               {title}
            </h1>
         </Link>

         <p
            className="header-slogan">
            An example made by Create-React-App.
         </p>
         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}