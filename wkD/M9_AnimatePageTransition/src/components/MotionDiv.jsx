import { motion } from "motion/react";

const MotionDiv = ({ children }) => {

  const fadeInEffect = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      variants={fadeInEffect}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;