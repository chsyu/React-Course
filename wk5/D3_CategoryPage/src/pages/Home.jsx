import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Home() {
  const { categoryName } = useParams();
  const url = categoryName || "/";
  let _products;
  if (url == "/")
    _products = products
  else
    _products = products.filter(x => x?.category.toUpperCase() === url.toUpperCase());

  const title = url === "/"
    ? "NORDIC NEST Shopping Cart"
    : _products[0]?.category;

  return (
    <div className="container mainLayout">
      <Header 
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <ProductList products={_products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
