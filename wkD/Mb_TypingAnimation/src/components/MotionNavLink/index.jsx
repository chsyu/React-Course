import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import styles from "./motionnavlink.module.css"


export default function ({ children, onClick, selected, id, to }) {
   const navigate = useNavigate()
   const onNavigate = () => {
      console.log({id, selected}, 'id, selected' )
      onClick();
      navigate(to)
   }

   const navText = {
      hidden: {
         fontWeight: 400,
         opacity: 0.7,
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
      <motion.li
         variants={navText}
         onClick={onNavigate}
         className={`${styles.navLink} ${id === selected && styles.selected}`}
         whileHover={{
            opacity: 1,
            fontWeight: 600,
            transition: {
               duration: 0.2,
               ease: "easeInOut"
            }
         }}
      >
         {id === selected && (<motion.div
            className={id === selected ? styles.underline : ''}
            layout="position"
            layoutId="underline"
            transition={{
               layout: {
                 duration: 0.3,
                 ease: 'easeOut',
               },
             }}
         />)}
         {children}
      </motion.li>

   )
}