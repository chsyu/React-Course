'use client'
import { Provider } from "react-redux";
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import store from '../redux/store';

const queryClient = new QueryClient()

export default function RootProvider({ children }) {
   return (
      <QueryClientProvider client={queryClient}>
         <Provider store={store}>
            {children}
         </Provider>
      </QueryClientProvider>
   )
}