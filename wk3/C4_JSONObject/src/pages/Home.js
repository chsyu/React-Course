import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="container">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;
