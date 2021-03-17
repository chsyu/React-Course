import { createContext, useReducer } from "react";
import products from "../json/products.json"
import { PAGE_CONTENT_SET } from "../utils/constants"

export const StoreContext = createContext();  

const initialState = {
   page: {
     title: "NORDIC NEST Shopping Cart",
     products,
   },
 };

 function reducer(state, action) {
   switch (action.type) {
     case PAGE_CONTENT_SET:
       return {
         ...state,
         page: { 
            title: action.payload,
            products 
         },
       };
     default:
       return state;
   }
 }

export function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, initialState);
   const value = { state, dispatch };

   return (
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
 }