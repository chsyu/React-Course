import styles from "./hamburgermenu.module.css"

export default function HamMenu({onClick, isOnTouch}) {
   return (
      <>
         {isOnTouch ? (
            <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}>
               <span className={styles.hamMenuBar1_Touch}></span>
               <span className={styles.hamMenuBar2_Touch}></span>
               <span className={styles.hamMenuBar3_Touch}></span>
            </span>
         ):(
            <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}>
               <span className={styles.hamMenuBar1}></span>
               <span className={styles.hamMenuBar2}></span>
               <span className={styles.hamMenuBar3}></span>
            </span>
         )}
      </>
   );
}