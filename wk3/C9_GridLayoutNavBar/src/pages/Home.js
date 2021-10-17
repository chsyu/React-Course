import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="bg-color">
        <div className="container-fluid grid-container">
            <Header />
            <NavBar  />
            <ProductList />
            <Footer  />
        </div>
    </div>
  );
}

export default Home;
