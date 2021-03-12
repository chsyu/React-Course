import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;

function ProductDetail({ product }) {
   return (
      <Row gutter={[32, 32]}>
        <Col 
          lg={{ span: 8, offset: 2 }}
        >
         <img
            alt=""
            className="product-image"
            src={product.image}
         />           
        </Col>
        <Col 
          lg={{ span: 12 }}
        >
         <div className="product-info">
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
               <p className="product-status">
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
               </p>
               <p className="product-qty">
                  Qty: {"   "}
                  <Select 
                     defaultValue={product.countInStock > 0 ? 1 : 0} 
                     className="select-style"
                  >
                     {[...Array(product.countInStock).keys()].map((x) => (
                        <Option key={x + 1} value={x + 1}>
                           {x + 1}
                        </Option>
                     ))}
                  </Select>
               </p>
               <AddToCart />
            </div>
         </div>           
        </Col>
      </Row>
   );
}

export default ProductDetail;