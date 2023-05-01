import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "../Icons";
import styles from "./setcolormode.module.css"
import { selectLightMode, setColorMode } from "../../redux/colorSLice";

export default function SetColorMode() {
   const { token: { colorTextBase } } = theme.useToken();
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
   }

   return (
      <div onClick={toggleColor} className={styles.colorMode} >
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
