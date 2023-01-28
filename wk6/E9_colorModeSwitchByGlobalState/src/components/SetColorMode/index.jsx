import { useEffect } from "react";
import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie"
import { Sun, Moon } from "../Icons";
import styles from "./setcolormode.module.css"
import { selectLightMode, setColorMode } from "../../redux/colorSLice";

export default function CartSummary() {
   const { token: { colorTextBase } } = theme.useToken();
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
   }

   useEffect(() => {
      Cookie.set("lightMode", JSON.stringify(lightMode));
   }, [lightMode])

   return (
      <div onClick={toggleColor} className={styles.cartSummary} >
         {
            lightMode ? (
               <Sun color={colorTextBase} />
            ) : (
               <Moon color={colorTextBase} />
            )
         }
      </div>
   );
}
