import { height } from '../anim';
import Body from './body';

import styles from './style.module.scss';
import { motion } from 'framer-motion';


export default function index() {

    return (
        <motion.div className={styles.nav} variants={height} initial="initial" animate="enter" exit="exit">
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body />
                    {/* <Footer /> */}
                </div>
                {/* <Images /> */}
            </div>
        </motion.div>
    );
}