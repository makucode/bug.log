import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import styles from "../../styles/dashboard/Popup.module.scss";

const Popup = ({ children, isOpen }) => {
    const animations = fadeIn;
    return (
        <div className={styles.Popup}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={isOpen}
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Popup;
