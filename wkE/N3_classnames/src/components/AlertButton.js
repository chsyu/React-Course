import { useState } from 'react';
import { Row, Col, Button } from "antd";
import cx from "classnames";

export default function AlertButton() {
   const [ showAnimation, setShowAnimation] = useState(false)
   return (
      <Row gutter={[32, 32]} style={{ paddingTop: '2rem' }}>
         <Col>
            <Button
               type="primary"
               className={cx({
                  "animate__animated animate__bounce btn-primary": showAnimation,
               })}
               onClick={()=>setShowAnimation(!showAnimation)}
            >
               Show Message
            </Button>         
         </Col>

      </Row>
   );
}

