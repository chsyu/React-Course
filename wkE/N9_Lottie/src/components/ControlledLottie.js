import { useState } from 'react'
import Lottie from "react-lottie";
import animationData from '../lotties/groovyWalk.json'
import { Button } from "antd";

const ControlledLottie = () => {
  const [ isStopped, setIsStopped ] = useState(false);
  const [ isPaused, setIsPaused ] = useState(false);

  const options = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <h1>Lottie</h1>
      <p>Base animation free from external manipulation</p>
      <Lottie options={options}
              height={400}
              width={400}
              isStopped={isStopped}
              isPaused={isPaused}
      />
      <Button onClick={() => setIsStopped(true)}>stop</Button>
      <Button onClick={() => setIsStopped(false)}>play</Button>
      <Button onClick={() => setIsPaused(!isPaused)}>pause</Button>
    </div>
  )
}

export default ControlledLottie