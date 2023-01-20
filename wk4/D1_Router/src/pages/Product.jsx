
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div className="container mainLayout">
         <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         />
         <ProductDetail product={product} className="layoutContent" />
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
