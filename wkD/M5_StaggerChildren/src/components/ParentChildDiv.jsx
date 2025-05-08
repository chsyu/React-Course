import { motion } from "motion/react";

function FourBalls() {
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <motion.div
        className="relative w-[150px] h-[150px] rounded-[30px] bg-white shadow-xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="absolute w-10 h-10 bg-[#4d4ea0] rounded-full left-[30px]"
          variants={itemA}
        />
        <motion.div
          className="absolute w-10 h-10 bg-[#4d4ea0] rounded-full left-[80px]"
          variants={itemA}
        />
        <motion.div
          className="absolute w-10 h-10 bg-[#4d4ea0] rounded-full left-[30px]"
          variants={itemB}
        />
        <motion.div
          className="absolute w-10 h-10 bg-[#4d4ea0] rounded-full left-[80px]"
          variants={itemB}
        />
      </motion.div>
    </div>
  );
}

export default FourBalls;