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
    <div className="mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-1/2 opacity-0"
        ref={textRef}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
      </div>
    </div>
  );
}

export default App;