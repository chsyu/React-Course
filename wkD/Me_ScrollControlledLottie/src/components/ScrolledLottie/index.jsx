import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from '../../lotties/download-icon.json'

const ScrolledLottie = () => {
  const lottieObj = useLottie({animationData});
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.45],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.45, 1],
        type: "seek",
        frames: [0, 1000],
      },
    ],
  });
  return (
    <div>
      <h1>Lottie</h1>
      <p>Base animation free from external manipulation</p>
      {Animation}
    </div>
  )

}

export default ScrolledLottie