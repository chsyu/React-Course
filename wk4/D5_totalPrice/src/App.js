import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Tableware from './pages/Tableware'
import Cookware from './pages/Cookware'
import HomeAccessories from './pages/HomeAccessories'
import Lighting from './pages/Lighting'
import Textile from './pages/Textile'
import Furniture from './pages/Furniture'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tableware" component={Tableware} />
        <Route path="/cookware" component={Cookware} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/home-accessories" component={HomeAccessories} />
        <Route path="/lighting" component={Lighting} />
        <Route path="/textile" component={Textile} />
        <Route path="/furniture" component={Furniture} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
