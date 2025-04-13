import { useState } from "react";
import { Heart } from "lucide-react";

function Favorite() {
   const [favorite, setFavorite] = useState(false);
   const toggleFavorite = () => {
      setFavorite(!favorite);
   }

   return (
      <>
         <nav
            onClick={toggleFavorite}
            className="relative cursor-pointer"
         >
            <Heart 
               strokeWidth={1.5}
               stroke="currentColor" 
               className={`w-5 h-5 md:w-6 md:h-7 text-current group-hover:scale-105 transition-transform ${favorite ? 'fill-red-900 text-red-900' : 'fill-none text-current'}`} />
         </nav>
      </>

   );
}

export default Favorite;