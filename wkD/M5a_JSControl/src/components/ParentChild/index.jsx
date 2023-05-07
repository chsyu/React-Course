import { motion } from 'framer-motion';
import styles from './parentchild.module.css';

export function Example( { isClick } ) {
   console.log(isClick, 'isClick')
   const container = {
      hidden: { rotate: 90 },
      show: {
          rotate: 0,
          transition: {
              staggerChildren: 0.4,
              delayChildren: 0.3,
          },
      },
  }

  const itemA = {
      hidden: { scale: 0, top: 100 },
      show: { scale: 1, top: 30 },
  }

  const itemB = {
      hidden: { scale: 0, top: 200 },
      show: { scale: 1, top: 80 },
  }

  return (
      <div>
          <motion.div
              style={{
                  width: 150,
                  height: 150,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                  position: "relative",
              }}
              variants={container}
              initial="hidden"
              animate={isClick ? "show" : "hidden"}
          >
              <motion.div
                  style={{ ...blobStyle, left: 30 }}
                  variants={itemA}
              />
              <motion.div
                  style={{ ...blobStyle, left: 80 }}
                  variants={itemA}
              />
              <motion.div
                  style={{ ...blobStyle, left: 30 }}
                  variants={itemB}
              />
              <motion.div
                  style={{ ...blobStyle, left: 80 }}
                  variants={itemB}
              />
          </motion.div>
      </div>
  )
}

const blobStyle = {
   width: 40,
   height: 40,
   borderRadius: 75,
   backgroundColor: "#4d4ea0",
   position: "absolute",
}
export default Example;