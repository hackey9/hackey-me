import {motion, useAnimation} from "framer-motion";
import useAvatar from "Hooks/useAvatar";
import React, {FC, useEffect} from "react";
import css from "./Avatar.module.scss";


const Avatar: FC<{ loading?: boolean; }> = ({loading}) => (
    <Area>
        {!loading && <Image/>}
        <Svg>
            <GrayCircle loading={loading}/>
            <GreenCircle loading={loading}/>
        </Svg>
    </Area>
);
export default Avatar;


const Area: FC = ({children}) => (
    <motion.div
        layout
        className={css.area}
        transition={{
            type: "tween",
            duration: 1,
            ease: [.3, .0, .3, 1],
        }}
    >
        {children}
    </motion.div>
);


const Image: FC = () => {

    const controls = useAnimation();

    const src = useAvatar();

    useEffect(() => {

        controls.set({opacity: 0});
        controls.start({
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                ease: "easeOut",
                delay: 1.8,
            }
        }).then();
    }, [controls]);

    return (
        <motion.div
            animate={controls}
            className={css.image}
            style={{backgroundImage: `url(${encodeURI(src)})`}}
        />
    );
}


const Svg: FC = ({children}) => (
    <motion.svg width={300} height={300} viewBox={"0 0 300 300"}>
        {children}
    </motion.svg>
)


const GrayCircle: FC<{ loading?: boolean }> = ({loading}) => {

    const controls = useAnimation();

    useEffect(() => {

        if (loading) {
            const animateLoading = async () => {
                controls.set({
                    r: 0,
                    opacity: 0,
                    strokeWidth: 6,
                });

                await controls.start({
                    r: 130,
                    opacity: 1,
                    strokeWidth: 9,
                    transition: {
                        type: "tween",
                        duration: 0.6,
                        ease: "easeOut",
                    }
                });

                await controls.start({
                    r: [130, 90],
                    strokeWidth: [9, 6],
                    transition: {
                        type: "tween",
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }
                });
            }

            animateLoading().then();

        } else {

            const animateIdle = async () => {

                await controls.start({
                    r: 90,
                    strokeWidth: 6,
                    transition: {
                        strokeWidth: {
                            type: "inertia",
                            bounceStiffness: 700,
                            bounceDamping: 10,
                            power: 0.2,
                            min: 6,
                            max: 6,
                        },
                        r: {
                            bounceStiffness: 700,
                            bounceDamping: 10,
                            power: 0.2,
                            min: 90,
                            max: 90,
                        }
                    }
                })
            }

            animateIdle().then();
        }

    }, [controls, loading]);

    return (
        <motion.circle
            animate={controls}
            cx={150}
            cy={150}
            r={90}
            fill={"none"}
            stroke={"rgba(255, 255, 255, 0.15)"}
            strokeWidth={6}
        />
    );
}

const GreenCircle: FC<{ loading?: boolean }> = ({loading}) => {

    const controls = useAnimation();

    useEffect(() => {

        if (loading) {
            controls.set({
                opacity: 0,
            });
            return;
        }

        (async () => {
            await controls.start({
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: 0.4,
                    ease: "easeIn",
                    delay: 1,
                }
            })

            await controls.start({
                strokeDashoffset: 0,
                transition: {
                    type: "tween",
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                }
            })
        })().then();

    }, [controls, loading])

    return (
        <motion.circle
            style={{rotate: -90}}
            animate={controls}
            cx={150}
            cy={150}
            r={90}
            fill={"none"}
            stroke={"#3FE381"}
            strokeWidth={6}
            strokeLinecap={"round"}
            strokeDasharray={Math.PI * 180}
            strokeDashoffset={Math.PI * 180 - 0.01}
        />
    )
}
