import { useState } from "react";
import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
      <Row gutter={[32, 32]}
         style={{ justifyContent: 'center' }}
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
                  <p className={styles.status}>
                     Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <div className={styles.qty}>
                     Qty: {"   "}
                     <Select
                        defaultValue={product.countInStock > 0 ? 1 : 0}
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <p className={styles.qty}>
                     Total Price: {product.price * qty}
                  </p>
                  <AddToBasket  product={product} qty={qty} />
               </div>
            </div>
         </Col>
      </Row>
   );
}

export default ProductDetail;