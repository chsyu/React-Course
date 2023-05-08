import 'antd/dist/reset.css';
import './App.css';
import { AnimatedFavoriteIcon, AnimatedCartIcon } from './components/icons';

const App = () => {

  return (
    <div className="container">
      <div className="lotties">
        <AnimatedCartIcon color="black" style={iconStyle} />
        <AnimatedFavoriteIcon color="black"  style={iconStyle}/>
      </div>
    </div>
  );
}

const iconStyle = {
  width: "20vw",
  height: "20vh",
  display: "block",
}

export default App;