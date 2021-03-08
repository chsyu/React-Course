import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="bg-color">
        <div className="container">
            <Header />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
