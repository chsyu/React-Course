import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';

import { HelmetProvider } from 'react-helmet-async'
import './App.css';
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product';
import { darkTheme, lightTheme } from './theme';

function App() {
  return (
    <ConfigProvider theme={lightTheme} >
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products">
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="id/:productId" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

export default App;
