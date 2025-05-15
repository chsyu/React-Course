import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectCartItems, selectPaymentMethod, savePrice, selectShippingAddress } from "@/redux/cartSlice";
import { useUserInfo, useCreateOrder } from "@/react-query";

export default function OrderCard({ orderData }) {

   const { orderId, shippingAddress, paymentMethod, cartItems, totalPrice, itemsPrice, shippingPrice, taxPrice, createdAt } = orderData;
   const formattedCreatedAt = new Intl.DateTimeFormat('zh-TW', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(createdAt));

   return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            <div className="card bg-base-100 border border-base-300 shadow p-4">
               <h2 className="text-lg font-bold mb-2">Shipping</h2>
               <p>
                  <strong>Name:</strong> {shippingAddress.fullName} <br />
                  <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
               </p>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow p-4">
               <h2 className="text-lg font-bold mb-2">Payment</h2>
               <p>
                  <strong>Method:</strong> {paymentMethod}
               </p>
            </div>

            <div className="card bg-base-100 border border-base-300 shadow p-4">
               <h2 className="text-lg font-bold mb-2">Order Items</h2>
               {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
               ) : (
                  <ul className="divide-y divide-base-300">
                     {cartItems.map((item) => (
                        <li key={item.id} className="flex items-center py-4">
                           <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                           <div className="ml-4 flex-1">
                              <div className="font-semibold">{item.name}</div>
                              <div className="text-sm">Qty: {item.qty}</div>
                           </div>
                           <div className="text-right font-bold">${item.price * item.qty}</div>
                        </li>
                     ))}
                     <li className="flex justify-between font-bold pt-4">
                        <span>Total</span>
                        <span>${itemsPrice}</span>
                     </li>
                  </ul>
               )}
            </div>
         </div>

         <div className="card bg-base-100 border border-base-300 shadow p-4">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <div className="flex justify-between mb-6">
               <span>(Created at </span>
               <span>{formattedCreatedAt})</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Items</span>
               <span>${itemsPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Shipping</span>
               <span>${shippingPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Tax</span>
               <span>${taxPrice}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
               <span>Order Total</span>
               <span>${totalPrice}</span>
            </div>
         </div>
      </div>
   );
}
