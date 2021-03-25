import { createContext, useReducer } from "react";
import products from "../json/products.json"
import {
   PAGE_TITLE_SET,
   PAGE_CONTENT_SET,
   NAVBAR_ITEM_SET,
   CART_ADD_ITEM,
   CART_REMOVE_ITEM,
} from "../utils/constants"

export const StoreContext = createContext();

const initialState = {
   page: {
      title: "NORDIC NEST Shopping Cart",
      products,
   },
   navBar: {
      activeItem: "",
   },
   cartItems: [],
};

let cartItems = {};

function reducer(state, action) {
   switch (action.type) {
      case PAGE_TITLE_SET:
         return {
            ...state,
            page: {
               ...state.page,
               title: action.payload,
            },
         };
      case PAGE_CONTENT_SET:
         return {
            ...state,
            page: {
               ...state.page,
               products: action.payload,
            },
         };
      case NAVBAR_ITEM_SET:
         return {
            ...state,
            navBar: {
               activeItem: action.payload
            }
         };
      case CART_ADD_ITEM:
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
      case CART_REMOVE_ITEM:
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