import { motion, AnimatePresence } from 'framer-motion';
import styles from './motiondiv.module.css';  

const FadeInDiv = ({ children, hidden }) => {

   const fadeInEffect = {
      hidden: { x: -2000, opacity: 0 },
      show: {
         opacity: 1,
         x: 0,
         transition: { 
            duration: 2, 
            ease: 'easeInOut',
          },
      },
      exit: {
         x: 2000,
         opacity: 0,
         transition: { 
            duration: 2, 
            ease: 'easeInOut', 
            opacity: { duration: 1 } 
         },
      }
   }

   return (
      <AnimatePresence>
         {hidden && (<motion.div
            className={styles.w50}
            variants={fadeInEffect}
            initial="hidden"
            animate="show"
            exit="exit"
         >
            {children}
         </motion.div>)}
      </AnimatePresence>
   );
}

export default FadeInDiv;