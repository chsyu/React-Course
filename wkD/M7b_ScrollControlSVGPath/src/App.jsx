import 'antd/dist/reset.css';
import './App.css';
import { motion, useScroll } from 'framer-motion';
import { AnimatedFavoriteIcon, AnimatedCartIcon } from './components/icons';

const App = () => {
  const { scrollX, scrollY, scrollYProgress, scrollXProgress } = useScroll();
  console.log({scrollX, scrollY, scrollYProgress, scrollXProgress})
  return (
    <div className="container">
      <motion.div className="lotties">
        <AnimatedCartIcon color="black" style={iconStyle} pathLength={{pathLength: scrollXProgress}}/>
        <AnimatedFavoriteIcon color="black"  style={iconStyle} pathLength={{pathLength: scrollYProgress}}/>
      </motion.div>
    </div>
  );
}

const iconStyle = {
  width: "20vw",
  height: "20vh",
  display: "block",
}

export default App;