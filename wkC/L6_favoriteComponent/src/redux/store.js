import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from './cartSlice';
import colorReducer from './colorSLice';
import usersReducer from './usersSlice'

// Data Persist Config
const persistConfig = {
  key: 'shoppingCart',
  storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedColorReducer = persistReducer(persistConfig, colorReducer);
const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

// Part2: Combine Reducers and Create a Store
export const store = configureStore({
   reducer: {
     cart: persistedCartReducer,
     color: persistedColorReducer,
     users: persistedUsersReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
   middleware: [thunk]
 });

//  export store to global
export const persistor = persistStore(store);

