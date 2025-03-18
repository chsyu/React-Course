import { BrowserRouter, Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";

import './App.css';
import Home from '@/pages/Home'
import Product from '@/pages/Product';
import Category from '@/pages/Category'
import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
