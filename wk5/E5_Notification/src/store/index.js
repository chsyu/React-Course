import { createContext, useReducer } from "react";
import products from "../json/products.json"
import { 
   SET_PAGE_TITLE,
   SET_PAGE_CONTENT,
   SET_NAVBAR_ACTIVEITEM 
} from "../utils/constants"

export const StoreContext = createContext();

const initialState = {
   page: {
      title: "NORDIC NEST Shopping Cart",
      products,
   },
   navBar: {
      activeItem: "/",
   }
};

function reducer(state, action) {
   console.log(action)
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
         }
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