import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import {
  SET_ALL_PRODUCTS,
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
} from "../utils/constants";

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  allProducts: [],
  page: {
    title: "NORDIC NEST Shopping Cart",
    products: [],
  },
  productDetail: {
    product: {},
    qty: 1,
  },
  navBar: {
    activeItem: "/",
  },
  cartItems,
  feedProducts: {
    loading: false,
    error: null,
  },
  requestProducts: {
    loading: false,
    error: null,
  }
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: action.payload,
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
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
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    case BEGIN_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: true } }
    case SUCCESS_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: false } }
    case FAIL_PRODUCTS_REQUEST:
      return { ...state, requestProducts: { ...state.requestProducts, loading: false, error: action.payload } }
    case BEGIN_PRODUCTS_FEED:
      return { ...state, feedProducts: { ...state.feedProducts, loading: true } }
    case SUCCESS_PRODUCTS_FEED:
      return { ...state, feedProducts: { ...state.feedProducts, loading: false } }
    case FAIL_PRODUCTS_FEED:
      return { ...state, feedProducts: { ...state.feedProducts, loading: false, error: action.payload } }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
