import { createContext, useReducer } from "react";
import products from "../json/products.json"
import {
   PAGE_CONTENT_SET,
   NAVBAR_ACTIVEITEM_SET,
   CART_ITEM_ADD,
   CART_ITEM_REMOVE,
} from "../utils/constants"

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const initialState = {
   page: {
      title: "NORDIC NEST Shopping Cart",
      products,
   },
   navBar: {
      activeItem: "",
   },
   cartItems,
};

function reducer(state, action) {
   switch (action.type) {
     case PAGE_CONTENT_SET:
       return {
         ...state,
         page: action.payload,
       };
     case NAVBAR_ACTIVEITEM_SET:
       return {
         ...state,
         navBar: {
           activeItem: action.payload,
         },
       };
     case CART_ITEM_ADD:
       const item = action.payload;
       const product = state.cartItems.find((x) => x.id === item.id);
       if (product) {
         cartItems = state.cartItems.map((x) =>
           x.id === product.id ? item : x
         );
         return { ...state, cartItems };
       }
       cartItems = [...state.cartItems, item];
       return { ...state, cartItems };
     case CART_ITEM_REMOVE:
       cartItems = state.cartItems.filter((x) => x.id !== action.payload);
       return { ...state, cartItems };
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