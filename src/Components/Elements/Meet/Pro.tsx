import {motion, useAnimation, useCycle} from "framer-motion";
import React, {FC, useCallback, useEffect, useReducer, useRef, useState} from "react";
import comparedStringsPosition from "Utils/comparedStringsPosition";
import random from "Utils/random";
import css from "./Pro.module.scss";


const Pro: FC<{ delay?: number; }> = ({delay}) => (
    // todo add phrases
    <Driver
        strings={[
            "Frontend React Developer.",
            "Backend PHP Developer.",
            "Backend .NET Developer.",
            "IoT Enthusiast.",
            "UX Designer.",
            "Company owner.",
        ]}
        delay={delay}
    />
);
export default Pro;


const Driver: FC<{ strings: string[], delay?: number }> = ({strings, delay}) => {

    const [currentText, nextText] = useCycle(...strings);

    const [enabled, enable] = useReducer((_: boolean) => true, false);

    useEffect(() => {
        const handle = setTimeout(enable, (delay ?? 0) * 1000);
        return () => clearTimeout(handle);
    }, [delay])

    useEffect(() => {
        console.log(enabled);
    }, [enabled])

    const handlePrintEnd = useCallback(() => {

        const handle = setTimeout(() => {
            nextText();
        }, 2000);

        return () => clearTimeout(handle);
    }, [nextText]);

    return (
        <Printer target={currentText} onPrintEnd={handlePrintEnd} enabled={enabled}/>
    );
};


enum PrintingDirection {
    Forward,
    Backward,
}

const Printer: FC<{
    target: string;
    onPrintEnd?: () => void;
    enabled: boolean;
}> = ({target, onPrintEnd, enabled}) => {

    const [current, setCurrent] = useState("");

    const directionRef = useRef<PrintingDirection>(PrintingDirection.Backward);

    const triggerPrintEnd = useCallback<() => void>(() => {
        onPrintEnd && onPrintEnd();
    }, [onPrintEnd]);

    useEffect(() => {

        if (!enabled) return;

        const comparedPosition = comparedStringsPosition(target, current);

        if (current.length === comparedPosition) {

            if (current.length === target.length) {
                triggerPrintEnd();
            } else {
                const time = (directionRef.current === PrintingDirection.Forward)
                    ? random(70, 100)
                    : 200;

                directionRef.current = PrintingDirection.Forward;

                const newCurrent = target.substr(0, comparedPosition + 1);

                const handle = setTimeout(() => {
                    setCurrent(newCurrent);
                }, time);

                return () => clearTimeout(handle);
            }
        } else {
            directionRef.current = PrintingDirection.Backward;

            const time = random(40, 50);

            const handle = setTimeout(() => {
                setCurrent(prev => prev.substr(0, prev.length - 1));
            }, time);

            return () => clearTimeout(handle);
        }

    }, [enabled, target, current, triggerPrintEnd])

    return (
        <Renderer hidden={!enabled}>{current}</Renderer>
    );
}

const Renderer: FC<{ children: string, hidden?: boolean }> = ({children, hidden}) => {

    const [key, changeKey] = useReducer((prev: number) => prev + 1, 0);

    useEffect(changeKey, [children]);

    return (
        <div className={css.area}>
            <div className={css.text}>{children}</div>
            <Cursor key={key} hidden={hidden}/>
        </div>
    );
}

const Cursor: FC<{ hidden?: boolean }> = ({hidden}) => {

    const controls = useAnimation();

    useEffect(() => {

        if (hidden) return;

        (async () => {

            await controls.start({
                opacity: 1,
            }, {
                type: "inertia",
                min: 1,
                max: 1,
                bounceStiffness: 500,
                bounceDamping: 10,
            });

            await controls.start({
                opacity: [1, 0],
            }, {
                type: "tween",
                duration: 0.5,
                ease: [.13, .01, .1, .99],
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.5,
            });

        })().then();

        return () => controls.stop();

    }, [hidden, controls]);

    return (
        <motion.div
            className={css.cursor}
            initial={{opacity: 1}}
            animate={controls}
            children={"|"}
            style={{visibility: hidden ? "hidden" : undefined}}
        />
    );
}
