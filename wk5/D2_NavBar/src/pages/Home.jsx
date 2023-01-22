import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Home() {

  return (
    <div className="container mainLayout">
      <Header 
        className="layoutHeader"
        title="NORDIC NEST Shopping Cart"
        slogan="An example made by Vite."
      />
      <ProductList products={products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
