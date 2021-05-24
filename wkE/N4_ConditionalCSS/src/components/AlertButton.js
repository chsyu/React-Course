import { useState } from 'react';
import { Row, Col, Button } from "antd";

export default function AlertButton() {
   const [showAnimation, setShowAnimation] = useState(false)
   return (
      <Button
         type="primary"
         className={
            showAnimation ?
               "animate__animated animate__bounce btn-primary"
               : ""
         }
         onClick={() => setShowAnimation(!showAnimation)}
      >
         Show Message
      </Button>

   );
}

