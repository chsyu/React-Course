import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSLice";

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
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
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

export default Router;
