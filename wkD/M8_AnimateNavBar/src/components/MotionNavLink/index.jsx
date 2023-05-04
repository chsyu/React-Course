import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import styles from "./motionnavlink.module.css"


export default function (props) {

   const navigate = useNavigate()
   const onNavigate = () => {
      navigate(props.to)
   }

   const navText = {
      hidden: {
         fontWeight: 400,
         opacity: 0,
         y: '-10px',
      },
      visible: {
         opacity: 0.7,
         y: 0,
         transition: {
            duration: 0.3,
            ease: "linear",
         }
      },
   }

   return (
      <motion.p 
         variants={navText} 
         onClick={onNavigate}
         className={styles.navLink}
         whileHover={{
            opacity: 1,
            fontWeight: 600,
            transition: {
               duration: 0.2,
               ease: "easeInOut"
            }
         }}
      >
         {props.children}
      </motion.p>
   )
}