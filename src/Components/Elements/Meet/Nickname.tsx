import {motion, Variants} from "framer-motion";
import React, {FC} from "react";
import css from "./Nickname.module.scss";


const Nickname: FC<{ delay?: number }> = ({delay}) => {

    return (
        <Area delay={delay}>
            <Text>hackey9</Text>
            <Line/>
        </Area>
    );
}
export default Nickname;


const Area: FC<{ delay?: number }> = ({children, delay}) => {

    const variants: Variants = {
        target: {
            transition: {
                when: "afterChildren",
                delayChildren: delay,
                staggerChildren: 0.3,
                staggerDirection: -1,
            },
        },
    };

    return (
        <motion.div
            layout
            className={css.area}
            variants={variants}
            initial={"initial"}
            animate={"target"}
        >
            {children}
        </motion.div>
    );
}


const Text: FC = ({children}) => {

    const variants: Variants = {
        initial: {
            y: "100%",
        },
        target: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
            }
        }
    }

    return (
        <motion.div
            className={css.text}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}


const Line: FC = () => {

    const variants: Variants = {
        initial: {
            width: 0,
        },
        target: {
            width: 120,
            transition: {type: "tween", duration: 0.5, ease: "easeOut"}
        },
    }

    return (
        <motion.div
            className={css.line}
            variants={variants}
        />
    );
}
