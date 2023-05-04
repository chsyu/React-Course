import { motion } from "framer-motion";

const MotionDiv = ({ children, className }) => {
   return (
      <motion.div
         className={className}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 3 }}
      >
         {children}
      </motion.div>
   );
}

export default MotionDiv;

// Path: src/components/ProfileCard/index.jsx