import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Tableware from './pages/Tableware'
import Cookware from './pages/Cookware'
import HomeAccessories from './pages/HomeAccessories'
import Lighting from './pages/Lighting'
import Textile from './pages/Textile'
import Furniture from './pages/Furniture'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tableware" element={<Tableware />} />
          <Route path="/cookware" element={<Cookware />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/home-accessories" element={<HomeAccessories />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/furniture" element={<Furniture />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
