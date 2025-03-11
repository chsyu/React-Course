
import { useParams } from 'react-router';
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
      <div className="container mx-auto main-layout bg-gray-900">
         <Header
            title="Product Detail"
            slogan="An example made by Vite."
         />
         <ProductDetail product={product} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Product;
