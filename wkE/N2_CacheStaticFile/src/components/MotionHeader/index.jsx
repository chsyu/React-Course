import { useState } from "react";
import { motion } from "framer-motion";
import Link from "../Link"
// import NavBar from "../NavBar";
import NavBar from "../MotionNavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"
import UserInfo from "../UserInfo";
import Favorite from "../Favorite";

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);


    const typingContainer = {
      hidden: { opacity: 0},
      show: { 
        opacity: 1,
        transition:{
          staggerChildren: 0.14,
        }}
    }
    
    const typingText = {
      hidden: { opacity: 0, y:"-20px"},
      show: { 
        opacity: 1, 
        y:"0",
        transition:{
          ease:'easeInOut',
        }
      }
    }
    const explainProduct = {
      hidden: { opacity: 0, y:"-20px"},
      show: { 
        opacity: 1, 
        y:"0", 
        transition:{
          delay:2.2,
          ease:"easeInOut"
        }
      }
    }
    const buttonProduct = {
      hidden: { opacity: 0, scaleX:0},
      show: { 
        opacity: 1, 
        scaleX:1,
        transition:{
          duration:.8,
          delay:2.3,
          type:'tween'
        }
      }
    }
    
    return (
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerWwrap}>
            <HamburgerMenu
              onClick={() => setIsOnTouch(!isOnTouch)}
              isOnTouch={isOnTouch}
            />
            <Link to="/">
              <h1 className={styles.headerTitle}>{title}</h1>
            </Link>

            <p className={styles.headerSlogan}>{slogan}</p>
          </div>

          <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
        </div>
        <div className={styles.iconWrap}>
          <SetColorMode className={styles.hideInMobile} />
          <Favorite />
          <UserInfo className={styles.hideInMobile} />
          <CartSummary />
        </div>
        <div className={styles.headerContentWrap}>
          <div className={styles.left}>
            <motion.h1 className={styles.text} variants={typingContainer} initial="hidden" animate="show">
              {
                Array.from("New Products").map((word,i) => (
                <motion.span key={i} variants={typingText}>{word}</motion.span>
                ))
              }
            </motion.h1>
              <motion.p className={styles.explainProduct} variants={explainProduct} initial="hidden" animate="show">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores ullam minima et iure saepe reprehenderit fugiat minus quod cum quisquam exercitationem
              </motion.p>
        
            </div>

          <div className={styles.right}>
            <motion.button className={styles.buttonOrder} variants={buttonProduct} initial="hidden" animate="show">Order now</motion.button>  
          </div>

        </div>
        <hr className={styles.hrHeaderLine} />

      </div>
    );
}

