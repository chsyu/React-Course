
import styles from './productitem.module.css';

export default function ProductItem({ product }) {

   return (
      <div className={styles.item}>
         <a href="/">
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </a>
         <div className={styles.info}>
            <h6 className={styles.category}>
               {product.category}
            </h6>
            <h2 className={styles.name}>
               {product.name}
            </h2>
            <p className={styles.description}>
               {product.description}
            </p>
            <div className={styles.more}>
               <a href="/" className={styles.link}>
                  See More ...
               </a>
               <span
                  className={styles.textGray}>
                  USD {product.price}.00
               </span>
            </div>
         </div>
      </div>
   );
}
