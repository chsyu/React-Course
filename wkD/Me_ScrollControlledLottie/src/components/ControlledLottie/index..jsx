import { useRef } from 'react'
import Lottie from "lottie-react";
import animationData from '../../lotties/groovyWalk.json'
import { Button } from "antd";

const ControlledLottie = () => {
  const lottieRef = useRef(null)
  return (
    <div>
      <h1>Lottie</h1>
      <p>Base animation free from external manipulation</p>
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData}
      />
      <Button onClick={() => lottieRef.current.stop()}>stop</Button>
      <Button onClick={() => lottieRef.current.play()}>play</Button>
      <Button onClick={() => lottieRef.current.pause()}>pause</Button>
    </div>
  )
}

export default ControlledLottie