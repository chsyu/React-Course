import { motion } from "framer-motion";
import styles from "./icons.module.css";

export function AnimatedFavoriteIcon({ color, style, pathLength }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={style}
    >
      <motion.path
        d="M13 13l7.071-6.317a5.866 5.866 0 018.225 0 5.7 5.7 0 010 8.127L15.959 27 3.7 14.81a5.7 5.7 0 010-8.127 5.866 5.866 0 018.225 0S16.582 10.533 19 13"
        fill="none"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        style={pathLength}
      ></motion.path>
    </svg>
  );
}



export function AnimatedCartIcon({ color, style, pathLength }) {

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={style}
    >
      <motion.path
        fill="none"
        stroke={color}
        strokeLinecap="square"
        strokeWidth="1.5"
        style={pathLength}
        d="M20,4 L24,16 M12,4 L8,16 M3,12 L29,12 C28.3333333,22 26.3333333,27 23,27 C18,27 14,27 9,27 C5.66666667,27 3.66666667,22 3,12 Z"
      />
    </motion.svg>
  );
}
