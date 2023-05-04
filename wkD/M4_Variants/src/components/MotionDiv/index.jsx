import { motion } from 'framer-motion';
import styles from './motiondiv.module.css';  

const FadeInDiv = ({ children }) => {

   const fadeInEffect = {
      hidden: { opacity: 0 },
      show: { 
         opacity: 1,
         transition: { duration: 2 },
      },
   }

  return (
    <motion.div
      className={styles.w50}
      variants={fadeInEffect}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export default FadeInDiv;