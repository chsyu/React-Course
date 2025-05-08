import { motion } from "motion/react";

const MotionDiv = ({ children, className}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;