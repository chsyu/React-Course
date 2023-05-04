import 'antd/dist/reset.css';
import './App.css';
import { useState } from 'react';
import FadeInDiv from './components/MotionDiv';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <div className="container">

          <FadeInDiv hidden = {isOnTouch}>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
          </FadeInDiv>
          <FadeInDiv hidden = {!isOnTouch}>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, at.</p>
          </FadeInDiv>

      <div className="button" onClick={() => setIsOnTouch(!isOnTouch)}>
        next content
      </div>
    </div>
  );
}

export default App;