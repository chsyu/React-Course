import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     products: productsReducer
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;

