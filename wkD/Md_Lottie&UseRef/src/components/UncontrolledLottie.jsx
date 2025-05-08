import Lottie from "lottie-react";
import animationData from '@/lotties/groovyWalk.json'

const UncontrolledLottie = () => {

  return (
    <div>
      <Lottie 
        animationData={animationData}
      />
    </div>
  )

}

export default UncontrolledLottie

