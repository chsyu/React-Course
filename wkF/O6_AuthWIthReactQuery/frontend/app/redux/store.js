import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import usersSlice from './usersSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     cart: cartReducer,
     users: usersSlice,
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;

