import { motion, AnimatePresence } from "motion/react";

const MotionDiv = ({ children, hidden }) => {

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
          variants={fadeInEffect}
          initial="hidden"
          animate="show"
          exit="exit"
       >
          {children}
       </motion.div>)}
    </AnimatePresence>
 );
};

export default MotionDiv;