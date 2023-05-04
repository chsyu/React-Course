import { motion } from 'framer-motion';
import styles from './motiondiv.module.css';  

const FadeInDiv = ({ children }) => {
  return (
    <motion.div
      className={styles.w50}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInDiv;