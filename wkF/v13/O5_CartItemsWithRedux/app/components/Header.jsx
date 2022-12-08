'use client'
import NavBar from "./NavBar";
import Link from 'next/link';
import CartSummary from "./CartSummary";

export default function Header({ title }) {
   return (
      <div className="header">
         <div className="header-wrap">
            <div className="header-text">
               <Link href="/">
                  <h1 className="header-title">
                     {title}
                  </h1>
               </Link>

               <p
                  className="header-slogan">
                  An example made by Create-Next-App.
               </p>
            </div>
            <div className="header-right">
               <CartSummary />
            </div>
         </div>

         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}