import { motion } from 'motion/react';

const App = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container w-30 h-30 mx-auto mt-20">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M13 13l7.071-6.317a5.866 5.866 0 018.225 0 5.7 5.7 0 010 8.127L15.959 27 3.7 14.81a5.7 5.7 0 010-8.127 5.866 5.866 0 018.225 0S16.582 10.533 19 13"
          fill="none"
          stroke="red"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="2"
          variants={pathVariants}
        ></motion.path>
      </motion.svg>

    </div>
  );
};

export default App;