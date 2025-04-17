import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import { persistor, store } from '@/redux/store';
import MainRoutes from '@/routes/MainRoutes';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider context={{}}>
            <BrowserRouter>
              <MainRoutes />
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
