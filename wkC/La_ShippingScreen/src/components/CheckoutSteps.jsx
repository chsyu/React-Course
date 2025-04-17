function CheckoutSteps(props) {
   console.log('CheckoutSteps', props, props.step1, props.step2, props.step3, props.step4);
   return (
      <div className="w-4/5 mb-8 flex text-xs font-bold mx-auto">
         <div
            className={`flex-1 border-t-4 border-solid p-1  border-primary text-primary`}
         >
            Sign-In
         </div>
         <div
            className={`flex-1 border-t-4 p-1 ${props.step2 ? 'border-primary text-primary' : 'border-gray-300'
               }`}
         >
            Shipping
         </div>
         <div
            className={`flex-1 border-t-4 p-1 ${props.step3 ? 'border-primary text-primary' : 'border-gray-300'
               }`}
         >
            Payment
         </div>
         <div
            className={`flex-1 border-t-4 p-1 ${props.step4 ? 'border-primary text-primary' : 'border-gray-300'
               }`}
         >
            Place Order
         </div>
      </div>
   );
}

export default CheckoutSteps; 