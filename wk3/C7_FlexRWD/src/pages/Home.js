import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header className="header" />
            <ProductList className="main products" />
            <Footer className="footer" />
        </div>
    </div>
  );
}

export default Home;
