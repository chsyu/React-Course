import Link from "../Link";
import CheckoutSteps from "../CheckoutSteps";
import SetColorMode from "../SetColorMode";
import styles from "./shippingheader.module.css";

export default function ShippingHeader(props) {

   return (
      <header className={styles.header}>
         <div className={styles.headerWrap}>
            <div className={styles.headerText}>
               <Link to="/">
                  <h1 className={styles.headerTitle} >{props.title}</h1>
               </Link>
            </div>
         </div>
         <CheckoutSteps {...props}></CheckoutSteps>
         <div className={styles.iconWrap}>
          <SetColorMode />
        </div>
      </header>
   );
}
