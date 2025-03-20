import { useState } from "react"
import { Link } from "react-router"
import NavBar from "@/components/NavBar"
import CartSummary from "@/components/CartSummary";
import SetColorMode from "@/components/SetColorMode";

function Header({ title, slogan }) {

   const [isOnTouch, setIsOnTouch] = useState(false);

   return (
      <header className="relative text-center flex flex-col items-center header">
         <Link to="/">
            <h2 className="pt-5 pb-2 text-3xl font-bold">
               {title}
            </h2>
         </Link>

         <p className="opacity-60 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {slogan}
         </p>
         <div className="absolute right-0 top-8 grid grid-cols-2 gap-0 w-[4rem] md:w-[7rem]">
            <SetColorMode />
            <CartSummary />
         </div>
         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-primary opacity-100 rounded" />
         </div>
         <NavBar />
      </header>
   );
}

export default Header;