
import { theme } from 'antd';
import _ from 'lodash';
import Link from '../Link';
import { FavoriteIcon } from '../Icons';
import { useToggleFavoriteProduct, useUserInfo } from '../../react-query';
import styles from './productitem.module.css';

export default function ProductItem({ product }) {
   const {
      token: { colorTextBase },
   } = theme.useToken();
   const { mutate } = useToggleFavoriteProduct();
   const { data: userInfo } = useUserInfo() || {};
   const favorites = userInfo.favorites || [];
   let isFavorite = _.includes(favorites, product.id);
   const toggleFavorite = () => {
      if (!!userInfo?.uid)
         mutate({ productId: product.id, uid: userInfo?.uid })
   }

   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' }}
               src={product.image}
               alt={product.name} />
         </Link>
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
               <div>
                  <Link to={`/products/id/${product.id}`} className={styles.link}>
                     See More ...
                  </Link>
                  <span
                     className={styles.textGray}>
                     USD {product.price}.00
                  </span>
               </div>
               <div onClick={toggleFavorite} className={styles.favorite}>
                  <FavoriteIcon color={isFavorite ? '#F19D38' : colorTextBase} />
               </div>
            </div>
         </div>
      </div>
   );
}
