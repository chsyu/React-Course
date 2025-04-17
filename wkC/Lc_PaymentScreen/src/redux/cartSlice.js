import { createSlice } from "@reduxjs/toolkit";

// Part1: Create initial state
const cartItems = [];
const shippingAddress = {};
const paymentMethod = "Google";
const initialState = { cartItems, shippingAddress, paymentMethod };

// Part2: Create Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (!!product) {
        const cartItems = state.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        state.cartItems = cartItems;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;
export const selectShippingAddress = (state) => state.cart.shippingAddress;
export const selectPaymentMethod = (state) => state.cart.paymentMethod;

// export actions to global
export const {
  addCartItems,
  removeCartItems,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;
