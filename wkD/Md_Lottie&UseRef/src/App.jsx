import 'antd/dist/reset.css';
import './App.css';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie/index.';


const App = () => {

  return (
    <div className="app">
      <h1>REACT LOTTIES</h1>
      <div className="lotties">
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    </div>
  );
}

export default App;