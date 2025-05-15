import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectPaymentMethod, savePaymentMethod } from '@/redux/cartSlice';
import { useState } from 'react';

export default function PaymentMethodCard() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const paymentMethod = useSelector(selectPaymentMethod);
   const [selectedMethod, setSelectedMethod] = useState(paymentMethod);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedMethod) {
         dispatch(savePaymentMethod(selectedMethod));
         navigate('/shopping/placeorder');
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-2xl p-4 mx-auto bg-base-100  rounded-box"
      >
         <div className="form-control mb-6">
            <label className="label">
               <span className="label-text font-bold">Payment Method:</span>
            </label>
            <div className="justify-around mt-4 flex flex-row ">
               <label className="cursor-pointer label">
                  <input
                     type="radio"
                     name="paymentMethod"
                     value="Google"
                     className="radio"
                     checked={selectedMethod === 'Google'}
                     onChange={(e) => setSelectedMethod(e.target.value)}
                  />
                  <span className="label-text ml-2">Google</span>
               </label>
               <label className="cursor-pointer label">
                  <input
                     type="radio"
                     name="paymentMethod"
                     value="PayPal"
                     className="radio"
                     checked={selectedMethod === 'PayPal'}
                     onChange={(e) => setSelectedMethod(e.target.value)}
                  />
                  <span className="label-text ml-2">PayPal</span>
               </label>
               <label className="cursor-pointer label">
                  <input
                     type="radio"
                     name="paymentMethod"
                     value="Line"
                     className="radio"
                     checked={selectedMethod === 'Line'}
                     onChange={(e) => setSelectedMethod(e.target.value)}
                  />
                  <span className="label-text ml-2">Line</span>
               </label>
            </div>
         </div>

         <div className="mt-10 form-control">
            <button type="submit" className="btn btn-primary w-full">
               Continue
            </button>
         </div>
      </form>
   );
}
