import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Category from '@/pages/Category';

export default function MainRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="products">
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="id/:productId" element={<Product />} />
         </Route>
      </Routes>
   );
}