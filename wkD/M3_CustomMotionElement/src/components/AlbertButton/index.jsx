import { Button } from "antd";
import { useState } from "react";

const AlertButton = () => {
   const [toggleBouncing, setToggleBouncing] = useState(false);

   return (
      <>
         <Button
            type="primary"
            className={toggleBouncing && "animate__animated animate__bounce"}
            style={{ width: '40%', height: '2rem' }}
            onClick={() => {
               setToggleBouncing(!toggleBouncing)
            }}
         >
            {toggleBouncing ? "Start Bouncing" : "Stop Bouncing"}
         </Button>
         {/* <Button
            type="primary"
            className="animate__animated animate__bounce"
            style={{ width: '40%', height: '2rem' }}
         >
            AlbertButton
         </Button> */}      
      </>

   );
}

export default AlertButton
