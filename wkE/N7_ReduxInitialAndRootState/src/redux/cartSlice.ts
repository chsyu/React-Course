import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, ShippingAddress, PriceInfo, OrderData } from "@/types";
import type { RootState } from "./store";

// Part1: Create initial state
const cartItems = [];
const shippingAddress = {
  fullName: "",
  adrs: "",
  city: "",
  postalCode: "",
  tel: "",
  country: "",
};
const price = {
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};
const paymentMethod = "Google";
const orderData = {
  orderId: "",
  userId: "",
  createdAt: "",
  cartItems: [],
  paymentMethod,
  ...shippingAddress,
  ...price,
};
const initialState = { cartItems, shippingAddress, price, paymentMethod, orderData };

// Part2: Create Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
      } else {
        state.cartItems.push(item);
      }
    },
    removeCartItems: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    removeAllCartItems: (state) => {
      state.cartItems = [];
    },
    saveShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    savePrice: (state, action: PayloadAction<PriceInfo>) => {
      state.price = action.payload;
    },
    saveOrderData: (state, action: PayloadAction<OrderData>) => {
      state.orderData = action.payload;
    },
  },
});

// export state to global
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectShippingAddress = (state: RootState) => state.cart.shippingAddress;
export const selectPaymentMethod = (state: RootState) => state.cart.paymentMethod;
export const selectPrice = (state: RootState) => state.cart.price;
export const selectOrderData = (state: RootState) => state.cart.orderData;

// export actions to global
export const {
  addCartItems,
  removeCartItems,
  removeAllCartItems,
  saveShippingAddress,
  savePaymentMethod,
  savePrice,
  saveOrderData,
} = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;
