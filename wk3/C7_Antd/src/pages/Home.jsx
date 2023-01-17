import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="container main-layout">
      <Header
        className="layout-header"
        title="NORDIC NEST Shopping Cart"
        slogan="An example made by Vite."
      />
      <ProductList className="layout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}

export default Home;
