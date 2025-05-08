import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useToggleFavorite } from "@/react-query";
import { useUserInfo } from "@/react-query";

function Favorite({ userId, productId }) {
   const { mutate, isError } = useToggleFavorite();
   const { data: userInfo } = useUserInfo();
   const [favorite, setFavorite] = useState(false);


   useEffect(() => {
      const isFavorite = userInfo?.favorites?.some(
         (fav) => fav.productId === productId || fav.id === productId
      );
      setFavorite(isFavorite);
   }, [userInfo, productId]);

   useEffect(() => {
      if (isError) {
         setFavorite(!favorite);
      }
   }, [isError]);

   const handleToggleFavorite = () => {
      if (!userId) {
         alert("請先登入");
         return;
      }
      setFavorite(!favorite);
      mutate({
         userId,
         productId,
      });
   }

   return (
      <>
         <nav
            onClick={handleToggleFavorite}
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