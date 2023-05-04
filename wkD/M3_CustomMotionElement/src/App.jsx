import 'antd/dist/reset.css';
import './App.css';
import FadeInDiv from './components/MotionDiv';

const App = () => {
  return (
    <div className="container">
      <FadeInDiv>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam, illum, culpa cupiditate reiciendis quidem at explicabo ipsa aliquam nobis non laudantium ut! Quo dicta, perferendis autem pariatur quia obcaecati ipsam minus vero labore eligendi soluta voluptatem maiores cum ad?</p>
      </FadeInDiv>
    </div>
  );
}

export default App;