import NavBar from "./NavBar";
import { Link } from "react-router-dom"

export default function Header({title}) {
   return (
      <div className="header">
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