import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

export default function HeaderTop() {
   return (
      <header className="header-top">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
         <span className="inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider">
            React Shopper
         </span>
        </Link>
        <CartSummary />
      </header>
   );
}