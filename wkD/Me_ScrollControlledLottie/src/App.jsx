import 'antd/dist/reset.css';
import './App.css';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie/index.';
import ScrolledLottie from './components/ScrolledLottie';

const App = () => {

  return (
    <div className="container">
      <div className="lotties">
        <ScrolledLottie />
      </div>
    </div>
  );
}

export default App;