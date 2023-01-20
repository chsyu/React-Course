import { Row, Col } from "antd";
import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"

function ProductDetail({ product }) {

   return (
      <Row gutter={[32, 32]}
         style={{justifyContent: 'center'}}
      >
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 6 }} 
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />                          
         </Col>
         <Col 
            xs={{ span: 24 }} 
            lg={{ span: 14 }} 
         >
            <div className={styles.info} >
               <h2 className={styles.category} >
                  {product.category}
               </h2>
               <h1 className={styles.name} >
                  {product.name}
               </h1>
               <p className={styles.description}>
                  {product.description_long}
               </p>
               <div className={styles.wrap}>
                  <p className={styles.price} >
                     US${product.price}.00
                  </p>
                  <AddToCart />
               </div>
            </div>           
         </Col>
      </Row>         
   );
}

export default ProductDetail;