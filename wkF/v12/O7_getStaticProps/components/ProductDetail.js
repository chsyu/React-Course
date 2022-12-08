import { useContext } from "react";
import { Select, Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

const { Option } = Select;

function ProductDetail() {
   const { state: { productDetail: { product, qty }, requestProducts: { loading } }, dispatch } = useContext(StoreContext);
   const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

   return (
      <>
         {loading
            ? (
               <div className="spinner-wrap">
                  <Spin indicator={antIcon} className="spinner" />
               </div>
            ) : (
               <Row gutter={[32, 32]}>
                  <Col
                     lg={{ span: 10, offset: 1 }}
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
                              ${product.price}.00
               </p>
                           <p className="product-status">
                              Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                           </p>
                           <div className="product-qty">
                              Qty: {"   "}
                              <Select
                                 defaultValue={qty}
                                 value={qty}
                                 className="select-style"
                                 onChange={val => setProductDetail(dispatch, product.id, val, product.category)}
                              >
                                 {[...Array(product.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                       {x + 1}
                                    </Option>
                                 ))}
                              </Select>
                           </div>
                           <p className="product-qty">
                              Total Price: ${product.price * qty}
                           </p>
                           <AddToCart />
                        </div>
                     </div>
                  </Col>
               </Row>
            )
         }
      </>
   );
}

export default ProductDetail;