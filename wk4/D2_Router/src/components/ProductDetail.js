import { Row, Col } from "antd";
import AddToCart from "./AddToCart"

function ProductDetail({ product }) {
   return (
      <Row gutter={[32, 32]}>
        <Col xs={{ span: 20, offset: 2}} lg={{ span: 6, offset: 2}}>
         <img
            alt={product.name}
            className="product-image"
            src={product.image}
         />           
        </Col>
        <Col xs={{ span: 20, offset: 2}} lg={{ span: 14, offset: 0}} >
         <div className="product-info--detail">
            <h2 className="product-category">
               {product.category}
            </h2>
            <h1 className="product-name product-name--large">
               {product.name}
            </h1>
            <p className="product-description">{product.description_long}</p>
            <div className="product-price-wrap">
               <p className="product-price product-price--large">
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