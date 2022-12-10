
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductList from "./components/ProductList";
import { getProducts } from './api';


async function Home() {

  const data = await getProducts();
  const products = data || [];
  const title = "NORDIC NEST Shopping Cart";

  return (
    <div className="container main-layout">
      <header className="layout-header">
        <Header title={title} />
      </header>
      <section className="layout-content">
        <ProductList products={products} />
      </section>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>  
  );
}

export default Home;
