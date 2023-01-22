import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';

import { HelmetProvider } from 'react-helmet-async'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product';
import theme from './theme';

function App() {
  return (
    <ConfigProvider theme={theme} >
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products">
              <Route path="category/:categoryName" element={<Home />} />
              <Route path="id/:productId" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

export default App;
