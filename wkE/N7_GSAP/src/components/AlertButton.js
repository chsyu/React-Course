import { useState, useRef, useEffect } from 'react';
import { Row } from "antd";
import { gsap } from "gsap";

export default function AlertButton() {
   const [ rotate, setRotate ] = useState(false);
   const boxRef = useRef(null);
   const rotateBoxRef = useRef(null);
   const onClick = () => {      
      gsap.to([boxRef.current], {
         x: 450,
         y: 450,
         duration: 0.2,
         ease: 'Elastic.easeOut.config(1, 0.3)'
       });
   };

   const onHandleRotate = () => {
      setRotate(!rotate);
   }

   useEffect(()=> {
      // new gsap.timeline()
      // .to([boxRef.current], {x: 450, duration: 1})
      // .to([boxRef.current], {x: 0, duration: 1})
      // .to([boxRef.current], {x: 225, y:225, duration: 1})
      // .to([boxRef.current], {rotation: 360, duration: 3})
   }, [])

   useEffect(() => {
      gsap.to([rotateBoxRef.current], {
         rotation: rotate? 360 : 0,
         duration: 1,
       });
   }, [rotate])

   return (
      <Row gutter={[32, 32]} style={{ paddingTop: '2rem' }}>
         <div
            ref={boxRef}
            style={{
               width: "160px",
               height: "160px",
               background: "salmon",
               borderRadius: "4px",
               cursor: "pointer"
            }}
            onClick={onClick}
         />
         <div
            ref={rotateBoxRef}
            style={{
               marginTop: '40px',
               width: "160px",
               height: "160px",
               background: "blue",
               borderRadius: "4px",
               cursor: "pointer"
            }}
            onClick={onHandleRotate}
         />         
      </Row>
   );
}

