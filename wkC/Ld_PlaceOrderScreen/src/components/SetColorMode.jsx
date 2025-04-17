import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { selectLightMode, setColorMode } from "@/redux/colorSLice";

export default function SetColorMode() {
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
      if (lightMode) {
         document.documentElement.setAttribute('data-theme', 'dark');
       } else {
         document.documentElement.setAttribute('data-theme', 'light');
       }
   }

   return (
      <div onClick={toggleColor} className="cursor-pointer" >
         {
            lightMode ? (
               <Sun className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
            ) : (
               <Moon className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" /> 
            )
         }
      </div>
   );
}
