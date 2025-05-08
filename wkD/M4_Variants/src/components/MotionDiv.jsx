import { motion } from "motion/react";

const MotionDiv = ({ children, className}) => {

   const fadeInEffect = {
      hidden: { opacity: 0 },
      show: { 
         opacity: 1,
         transition: { duration: 2 },
      },
   }

  return (
    <motion.div
      className={className}
      variants={fadeInEffect}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;