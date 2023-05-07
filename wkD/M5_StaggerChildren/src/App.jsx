import 'antd/dist/reset.css';
import './App.css';
import FadeInDiv from './components/MotionDiv';
import ParentChild from './components/ParentChild';

const App = () => {
  return (
    <div className="container">
      <ParentChild />
    </div>
  );
}

export default App;