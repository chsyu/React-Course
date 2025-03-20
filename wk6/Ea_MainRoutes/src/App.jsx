import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { persistor, store } from '@/redux/store';
import MainRoutes from '@/routes/MainRoutes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
