import 'antd/dist/reset.css';
import './App.css';
import { Provider } from "react-redux";
import Router from './Router';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
