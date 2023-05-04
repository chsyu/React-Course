import Lottie from "lottie-react";
import animationData from '../../lotties/groovyWalk.json'

const UncontrolledLottie = () => {

  return (
    <div>
      <h1>Lottie</h1>
      <p>Base animation free from external manipulation</p>
      <Lottie 
        animationData={animationData}
      />
    </div>
  )

}

export default UncontrolledLottie