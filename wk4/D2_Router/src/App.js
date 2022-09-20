import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>    
    </BrowserRouter>

  );
}

export default App;
