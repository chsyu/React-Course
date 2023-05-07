import 'antd/dist/reset.css';
import './App.css';
import { Button } from 'antd';
import { useState } from 'react';
import ParentChild from './components/ParentChild';

const App = () => {
  const [ isClick, setIsClick ] = useState(false)
  return (
    <div className="container">
      <ParentChild isClick={isClick} />
      <Button style={{width: '30vw', marginTop: 30,}} type="primary" onClick={() => setIsClick(!isClick)}>
        {isClick ? 'ResetAnimation' : 'ShowAnimation'}
      </Button>
    </div>
  );
}

export default App;