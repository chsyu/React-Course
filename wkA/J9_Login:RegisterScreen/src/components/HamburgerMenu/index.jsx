import styles from "./hamburgermenu.module.css"

export default function HamMenu({ onClick, isOnTouch }) {
   const bar1Style = isOnTouch ? styles.hamMenuBar1_Touch : styles.hamMenuBar1;
   const bar2Style = isOnTouch ? styles.hamMenuBar2_Touch : styles.hamMenuBar2;
   const bar3Style = isOnTouch ? styles.hamMenuBar3_Touch : styles.hamMenuBar3;

   return (
      <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}>
         <span className={bar1Style}></span>
         <span className={bar2Style}></span>
         <span className={bar3Style}></span>
      </span>
   );
}