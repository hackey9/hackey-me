import {motion, useAnimation} from "framer-motion";
import React, {FC, useEffect} from "react";
import css from "./Name.module.scss";


const Name: FC<{ delay?: number }> = ({delay}) => {

    const controls = useAnimation();

    useEffect(() => {

        controls.set({
            opacity: 0,
            scaleX: 1.2,
        });

        controls.start({
            opacity: 1,
            scaleX: 1,
            transition: {
                opacity: {type: "tween", duration: 1, ease: "easeInOut", delay},
                scaleX: {type: "tween", duration: 1, ease: "linear", delay},
            }
        }).then();

    }, [controls, delay]);

    return (
        <Block>
            <Text delay={delay}>Александр Казакевич</Text>
        </Block>
    );
}
export default Name;


const Block: FC = ({children}) => (
    <motion.div className={css.block}>
        {children}
    </motion.div>
);


const Text: FC<{ delay?: number }> = ({children, delay}) => {

    const controls = useAnimation();

    useEffect(() => {

        controls.set({
            opacity: 0,
            letterSpacing: "10px",
        });

        (async () => {
            await controls.start({
                opacity: 1,
                letterSpacing: "0px",
                transition: {type: "tween", duration: 1, ease: "easeOut", delay}
            });

            await controls.start({
                transition: {type: "tween", duration: 1, ease: "easeIn"}
            });

        })().then();

    }, [controls, delay]);

    return (
        <motion.div animate={controls} className={css.text}>
            {children}
        </motion.div>
    )
}
