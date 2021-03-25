import { createContext, useReducer } from "react";
import products from "../json/products.json"
import {
   SET_PAGE_TITLE,
   SET_PAGE_CONTENT,
   SET_NAVBAR_ACTIVEITEM,
   ADD_CART_ITEM,
   REMOVE_CART_ITEM,
} from "../utils/constants"

export const StoreContext = createContext();

const initialState = {
   page: {
      title: "NORDIC NEST Shopping Cart",
      products,
   },
   navBar: {
      activeItem: "/",
   },
   cartItems: [],
};

let cartItems = {};

function reducer(state, action) {
   switch (action.type) {
      case SET_PAGE_TITLE:
         return {
            ...state,
            page: {
               ...state.page,
               title: action.payload,
            },
         };
      case SET_PAGE_CONTENT:
         return {
            ...state,
            page: {
               ...state.page,
               products: action.payload,
            },
         };
      case SET_NAVBAR_ACTIVEITEM:
         return {
            ...state,
            navBar: {
               activeItem: action.payload
            }
         };
      case ADD_CART_ITEM:
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
      case REMOVE_CART_ITEM:
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