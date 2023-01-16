import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
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
