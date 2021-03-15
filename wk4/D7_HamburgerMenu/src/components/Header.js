import { useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "./NavBar";
import HamMenu from "./HamMenu";

export default function Header({title}) {
   const [isOnTouch, setIsOnTouch] = useState(false);
   return (
      <div className="header">
         <HamMenu 
            onClick={()=>setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch} 
         />
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
         <NavBar isOnTouch={isOnTouch} />
      </div>
   );
}