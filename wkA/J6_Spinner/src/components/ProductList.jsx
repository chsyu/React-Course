import ProductItem from '@/components/ProductItem';

function ProductList({ products, isLoading }) {
   return (
      <>
         {isLoading
            ? (<div className="flex justify-center mt-[20vh]">
               <span className="loading loading-spinner loading-xl"></span>
            </div>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
                  {products.map((product) => (
                     <ProductItem key={product.id} product={product} />
                  ))}
               </div>
            )
         }
      </>
   );
}

export default ProductList;