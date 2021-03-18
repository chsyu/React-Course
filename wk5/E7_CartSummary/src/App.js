import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tableware" component={Home} />
          <Route path="/cookware" component={Home} />
          <Route path="/home-accessories" component={Home} />
          <Route path="/lighting" component={Home} />
          <Route path="/textile" component={Home} />
          <Route path="/furniture" component={Home} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
