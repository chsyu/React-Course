import { Link } from "react-router";
import CheckoutSteps from "@/components/CheckoutSteps";
import SetColorMode from "@/components/SetColorMode";

export default function ShippingHeader(props) {
   return (
     <header className="text-center relative">
       <div className="flex justify-center">
         <div>
           <Link to="/">
             <h1 className="text-xl mb-10 md:text-2xl pt-4 font-bold">
               {props.title}
             </h1>
           </Link>
         </div>
       </div>
 
       <CheckoutSteps {...props} />
 
       <div className="absolute right-2 top-8 grid grid-cols-[4rem]">
         <SetColorMode />
       </div>
     </header>
   );
 }