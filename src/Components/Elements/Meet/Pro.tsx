import {motion, useAnimation, useCycle} from "framer-motion";
import React, {FC, useCallback, useEffect, useReducer, useState} from "react";
import css from "./Pro.module.scss";


const Pro: FC<{ delay?: number }> = ({delay}) => {

    // todo append delay

    const texts: string[] = [
        "T.",
        "Front-end developer.",
        "PHP developer.",
        ".NET C# developer.",
        "Company owner.",
        "Company creator.",
        "UX Designer.",
    ];

    return (
        <Driver strings={texts}/>
    );
}
export default Pro;


const Driver: FC<{ strings: string[]; }> = ({strings}) => {

    const [currentText, nextText] = useCycle(...strings);

    const handlePrintEnd = useCallback(() => {

        const handle = setTimeout(() => {
            nextText();

        }, 2000);

        return () => clearTimeout(handle);
    }, [nextText]);

    return (
        <Printer target={currentText} onPrintEnd={handlePrintEnd}/>
    );
};


function getComparedPosition(target: string, current: string): number {

    for (let i = 0; i < target.length; i++) {
        if (current[i] !== target[i]) {
            return i;
        }
    }

    return current.length;
}

const Printer: FC<{ target: string, onPrintEnd?: () => void }> = ({target, onPrintEnd}) => {

    const [current, setCurrent] = useState("");

    const triggerPrintEnd = useCallback<() => void>(() => {
        onPrintEnd && onPrintEnd();
    }, [onPrintEnd]);

    useEffect(() => {

        const comparedPosition = getComparedPosition(target, current);

        if (current.length === comparedPosition) {

            if (current.length === target.length) {

                // trigger end
                triggerPrintEnd();
                return;
            } else {
                // add char
                let time = 100;

                if (current.length === 0) {
                    time = 400;
                }

                const newCurrent = target.substr(0, comparedPosition + 1);

                const handle = setTimeout(() => {
                    setCurrent(newCurrent);
                }, time);

                return () => clearTimeout(handle);

            }
        } else {
            console.log("remove", comparedPosition, current.length, target.length)

            // remove char
            const time = 40;

            const handle = setTimeout(() => {
                setCurrent(prev => prev.substr(0, prev.length - 1));
            }, time);

            return () => clearTimeout(handle);
        }

    }, [target, current, triggerPrintEnd])

    return (
        <Renderer>{current}</Renderer>
    );
}

const Renderer: FC<{ children: string }> = ({children}) => {


    const [key, changeKey] = useReducer((prev: number) => prev + 1, 0);

    useEffect(changeKey, [children]);

    useEffect(() => {
        setInterval(changeKey, 3500);
    }, [])

    return (
        <div className={css.area}>
            <div className={css.text}>{children}</div>
            <Cursor key={key}/>
        </div>
    );
}

const Cursor: FC = () => {

    const controls = useAnimation();

    useEffect(() => {

        (async () => {

            await controls.start({
                opacity: 1,
            }, {
                opacity: {
                    type: "inertia",
                    min: 1,
                    max: 1,
                    bounceStiffness: 500,
                    bounceDamping: 10,
                }
            });

            await controls.start({
                opacity: [1, 0],
            }, {
                opacity: {
                    type: "tween",
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 0.5,
                }
            });

        })().then();

        return () => controls.stop();

    }, [controls]);

    // todo refactor this!
    //return <div className={css.cursor}>|</div>

    return (
        <motion.div
            //layout
            //layoutId={"pro-cursor"}
            className={css.cursor}
            initial={{opacity: 1}}
            animate={controls}
            children={"|"}
            transition={{
                y: {
                    type: "inertia",
                    min: 0,
                    max: 0,
                    bounceStiffness: 20000,
                    bounceDamping: 1,
                }
            }}
        />
    );
}
