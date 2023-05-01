import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const cartItems = [];
const shippingAddress = {};
const initialState = { cartItems, shippingAddress };
const cartSlice = createSlice({
  name: 'cart',
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
  },
});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;
export const selectShippingAddress = (state) => state.cart.shippingAddress;

// export actions to global
export const { addCartItems, removeCartItems, saveShippingAddress } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;
