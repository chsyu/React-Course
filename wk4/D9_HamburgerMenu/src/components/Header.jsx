import { useState } from "react"
import { Link } from "react-router"
import NavBar from "@/components/NavBar"
import HamMenu from "@/components/HamMenu"

function Header({ title, slogan }) {

   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="relative text-center flex flex-col items-center header">
         <HamMenu
            className="absolute left-0 top-4"
            onClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
            />
         <Link to="/">
            <h2 className="text-white pt-5 pb-2 text-3xl font-bold">
               {title}
            </h2>
         </Link>

         <p className="text-gray-400 text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {slogan}
         </p>
         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-primary opacity-100 rounded" />
         </div>
         <NavBar />
      </header>
   );
}

export default Header;