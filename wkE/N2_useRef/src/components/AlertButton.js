import { useRef } from 'react';
import { Row, Button } from "antd";

export default function AlertButton() {
   const btnRef = useRef(null);
   const onClick = () => {
      const btnClassName = btnRef.current.className; 
      
      btnRef.current.className = btnClassName  
      + " animate__animated animate__bounce";
   };
   return (
      <Row gutter={[32, 32]} style={{ paddingTop: '2rem' }}>
         <Button
            ref={btnRef}
            type="primary"
            onClick={onClick}
         >
            Show Message
         </Button>
      </Row>
   );
}

