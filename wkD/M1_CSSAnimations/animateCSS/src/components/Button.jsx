import { useState } from "react";

const Button = () => {
   const [toggleBouncing, setToggleBouncing] = useState(false);

   return (
      <button
         className={`btn btn-primary px-8 py-5 ${toggleBouncing ? "animate__animated animate__bounce" : ""}`}
         onClick={() => {
            setToggleBouncing(!toggleBouncing)
         }}
      >
         <span className="font-thin ml-3">
            {toggleBouncing ? "Start Bouncing" : "Stop Bouncing"}
         </span>
      </button>
   );
}

export default Button
