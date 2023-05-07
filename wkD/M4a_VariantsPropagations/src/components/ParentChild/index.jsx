import { motion } from 'framer-motion';
import styles from './parentchild.module.css';

export function Example() {
   const parent = {
       variantA: { scale: 1 },
       variantB: { scale: 1.25 }
   };

   const child = {
       variantA: { bottom: 0, right: 0, rotate: 0 },
       variantB: { top: 0, left: 0, rotate: 180 }
   };

   return (
       <motion.div
           className={styles.parent}
           variants={parent}
           initial="variantA"
           whileHover="variantB"
       >
           <motion.div
               className={styles.child}
               variants={child}
               transition={{
                   type: "spring",
                   damping: 10,
                   mass: 0.2,
                   stiffness: 150
               }}
           />
       </motion.div>
   );
}

export default Example;