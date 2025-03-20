import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Category from '@/pages/Category';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default function MainRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="products">
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="id/:productId" element={<Product />} />
         </Route>
         <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
         </Route>
      </Routes>
   );
}