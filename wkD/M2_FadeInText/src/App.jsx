import 'antd/dist/reset.css';
import './App.css';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="container">
      <motion.div
        className="w50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
      </motion.div>
    </div>
  );
}

export default App;