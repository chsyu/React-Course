import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css';
import Home from './pages/Home'
import Product from './pages/Product';
import Category from './pages/Category'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App;
