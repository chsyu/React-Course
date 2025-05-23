import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router';
import AddToBasket from "@/components/AddToBasket"
import Favorite from "@/components/Favorite";
import { useUserInfo } from '@/react-query';

function ProductDetail({ product, isLoading }) {
  const [searchParams] = useSearchParams();
  const { data: userInfo } = useUserInfo();
  const userId = userInfo?.uid || null;
  const productId = product.id;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    const qtyFromBasket = searchParams.get('qtyFromBasket');
    const parsedQty = qtyFromBasket ? Number(qtyFromBasket) : (product?.countInStock > 0 ? 1 : 0);
    setQty(isNaN(parsedQty) || parsedQty < 0 ? 0 : parsedQty);
  }, [searchParams, product?.countInStock]);

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center animate-pulse">
          {/* 左側 skeleton */}
          <div className="lg:col-span-6 lg:col-start-3">
            <div className="skeleton w-full h-96 rounded-md"></div>
          </div>

          {/* 右側 skeleton */}
          <div className="lg:col-span-14 px-4 space-y-4">
            <div className="skeleton h-5 w-1/4"></div>
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-20 w-full"></div>
            <div className="skeleton h-6 w-1/4"></div>
            <div className="skeleton h-6 w-1/2"></div>
            <div className="skeleton h-6 w-1/4"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
          {/* 左側：產品圖片（佔6/24） */}
          <div className="lg:col-span-6 lg:col-start-3">
            <img
              alt={product.name}
              className="w-full h-96 object-cover object-center rounded-md"
              src={product.image}
            />
            <div className="mt-2 flex justify-end">
              <Favorite
                userId={userId}
                productId={productId}
              />              
            </div>

          </div>

          {/* 右側：產品資訊（佔14/24） */}
          <div className="lg:col-span-14 px-4">
            <h2 className="opacity-60 mb-1 text-lg">{product.category}</h2>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="opacity-60 text-base mb-4">{product.description_long}</p>

            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">US${product.price}.00</p>
              <p>
                <span className="font-bold">Status</span>: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold">Qty:</span>
                <select
                  className="select select-bordered w-20"
                  value={qty}
                  onChange={event => setQty(Number(event.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <p>
                <span className="font-bold">Total Price</span>: {product.price * qty}
              </p>
              <AddToBasket product={product} qty={qty} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;