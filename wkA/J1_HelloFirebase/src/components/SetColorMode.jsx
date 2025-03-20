import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "@/components/Icons";
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
               <Sun color="currentColor" />
            ) : (
               <Moon color="currentColor" /> 
            )
         }
      </div>
   );
}
