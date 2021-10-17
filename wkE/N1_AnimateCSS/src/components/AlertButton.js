import { Row, Button } from "antd";

const AlertButton = () => {
   return (
      <Row gutter={[32, 32]} style={{ paddingTop: '2rem' }}>
         <Button
            type="primary"
            className="animate__animated animate__bounce"
         >
            Show Message
         </Button>
      </Row>
   );
}

export default AlertButton
