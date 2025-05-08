import { useState } from 'react';
import FadeInDiv from '@/components/MotionDiv';

const App = () => {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <div className="container">

      <FadeInDiv hidden={isOnTouch}>
        <p className="absolute w-1/2 left-[25vw] top-[30vh]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
      </FadeInDiv>
      <FadeInDiv hidden={!isOnTouch}>
        <p className="absolute w-1/2 left-[25vw] top-[30vh]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, at.</p>
      </FadeInDiv>

      <button className="absolute block left-[45vw] bottom-[30vh] btn btn-primary px-8" onClick={() => setIsOnTouch(!isOnTouch)}>
        next content
      </button>
    </div>
  );
};

export default App;