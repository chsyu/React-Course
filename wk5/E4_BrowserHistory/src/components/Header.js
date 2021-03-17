import { useContext } from "react";
import { useHistory } from "react-router-dom"
import { PAGE_TITLE_SET, PAGE_CONTENT_SET } from "../utils/constants"
import { StoreContext } from "../store"
import NavBar from "./NavBar";
import products from "../json/products.json"

export default function Header(props) {
   const { dispatch } = useContext(StoreContext);
   const history = useHistory();
   const onClickHeader = () => {
      dispatch({ 
         type: PAGE_TITLE_SET, 
         payload: "NORDIC NEST Shopping Cart" 
      });
      dispatch({ 
         type: PAGE_CONTENT_SET, 
         payload: products, 
      });
      history.push("/");
   };

   return (
      <div className="header">
         <h1 className="header-title" onClick={onClickHeader}>
            {props.title}
         </h1>
         <p
            className="header-slogan">
            An example made by Create-React-App.
         </p>
         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}