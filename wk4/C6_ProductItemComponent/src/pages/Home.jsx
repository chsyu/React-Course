import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
import products from "../json/products.json"

function Home() {
  return (
    <div className="container main-layout">
      <Header
        className="layout-header"
        title="NORDIC NEST Shopping Cart"
        slogan="An example made by Vite."
      />
      <ProductList products={products} className="laytout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;
