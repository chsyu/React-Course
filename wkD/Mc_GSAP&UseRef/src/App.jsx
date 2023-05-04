import 'antd/dist/reset.css';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import './App.css';

const App = () => {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to([textRef.current], {
      opacity: 1,
      duration: 2,});
  }, []);

  return (
    <div className="container">
      <div
        className="w50"
        ref={textRef}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
      </div>
    </div>
  );
}

export default App;