import ProductItem from '@/components/ProductItem';
import type { Product } from '@/types';

type ProductListProps = {
   products: Product[];
   isLoading: boolean;
};

function ProductList({ products, isLoading }: ProductListProps) {
   return (
      <>
         {isLoading ? (
            // Skeleton Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
               {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="p-4">
                     <div className="border border-gray-300 rounded-xl overflow-hidden space-y-3">
                        <div className="skeleton w-full h-44"></div>
                        <div className="p-4 space-y-2">
                           <div className="skeleton h-4 w-1/2"></div>
                           <div className="skeleton h-5 w-3/4"></div>
                           <div className="skeleton h-4 w-full"></div>
                           <div className="flex justify-between items-center mt-4">
                              <div className="skeleton h-4 w-1/3"></div>
                              <div className="skeleton h-5 w-1/4"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
               {products.map((product:Product) => (
                  <ProductItem key={product.id} product={product} />
               ))}
            </div>
         )}
      </>
   );
}

export default ProductList;
