import { useState } from "react"
import { Link } from "react-router"
import { motion } from "motion/react"
import NavBar from "@/components/NavBar"
import CartSummary from "@/components/CartSummary";
import SetColorMode from "@/components/SetColorMode";
import UserInfo from "@/components/UserInfo";

function Header({ title, slogan }) {

   const [isOnTouch, setIsOnTouch] = useState(false);

   const typingContainer = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.14,
         }
      }
   }

   const typingText = {
      hidden: { opacity: 0, y: "-20px" },
      show: {
         opacity: 1,
         y: "0",
         transition: {
            ease: 'easeInOut',
         }
      }
   }

   const explainProduct = {
      hidden: { opacity: 0, y: "-20px" },
      show: {
         opacity: 1,
         y: "0",
         transition: {
            delay: 2.2,
            ease: "easeInOut"
         }
      }
   }

   const buttonProduct = {
      hidden: { opacity: 0, scaleX: 0 },
      show: {
         opacity: 1,
         scaleX: 1,
         transition: {
            duration: .8,
            delay: 2.3,
            type: 'tween'
         }
      }
   }

   return (
      <header className="relative text-center flex flex-col items-center header">
         <Link to="/">
            <h2 className="pt-5 pb-2 text-2xl md:text-3xl font-bold">
               {title}
            </h2>
         </Link>

         <p className="opacity-60 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {slogan}
         </p>
         <div className="absolute right-4 top-8 grid grid-cols-3 gap-0 w-[6rem] md:w-[9rem]">
            <SetColorMode />
            <UserInfo />
            <CartSummary />
         </div>

         <div className="hidden md:flex justify-between w-full h-[50vh] header-newproducts-bg px-6">
            {/* Left Section */}
            <div className="w-[70%] flex flex-col justify-center">
               <motion.h1
                  className="text-4xl md:text-5xl font-extrabold text-center mt-16"
                  variants={typingContainer}
                  initial="hidden"
                  animate="show"
               >
                  {Array.from("New Products").map((word, i) => (
                     <motion.span key={i} variants={typingText}>
                        {word}
                     </motion.span>
                  ))}
               </motion.h1>

               <motion.p
                  className="text-lg w-4/5 max-w-[400px] mx-auto mt-8 text-justify"
                  variants={explainProduct}
                  initial="hidden"
                  animate="show"
               >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores ullam minima et iure saepe reprehenderit fugiat minus quod cum quisquam exercitationem
               </motion.p>
            </div>

            {/* Right Section */}
            <div className="relative w-[35%] self-center text-center">
               <motion.button
                  className="px-8 py-3 bg-[#464646] text-[#d2d2d2] text-base font-semibold hover:bg-[#666] transition-all duration-300"
                  variants={buttonProduct}
                  initial="hidden"
                  animate="show"
               >
                  Order now
               </motion.button>
            </div>
         </div>

         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-primary opacity-100 rounded" />
         </div>
         <NavBar />
      </header>
   );
}

export default Header;