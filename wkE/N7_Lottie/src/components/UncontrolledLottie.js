import Lottie from "react-lottie";
import animationData from '../lotties/groovyWalk.json'

const UncontrolledLottie = () => {
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
      />
    </div>
  )

}

export default UncontrolledLottie