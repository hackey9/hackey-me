import {motion} from "framer-motion";
import React, {FC} from "react";
import css from "./Skill.module.scss";


const Skill: FC<{
    name: string,
    border: string,
    bg: string,
    image: string,
}> = ({name, bg, border, image}) => {

    return (
        <Outline color={border}>
            <Circle color={bg}>
                <Image src={image}/>
            </Circle>
        </Outline>
    );
}
export default Skill;


const Outline: FC<{ color: string }> = ({children, color}) => (
    <motion.div
        className={css.outline}
        style={{backgroundColor: color}}
    >
        {children}
    </motion.div>
);


const Circle: FC<{ color: string }> = ({children, color}) => (
    <motion.div
        className={css.bg}
        style={{backgroundColor: color}}
    >
        {children}
    </motion.div>
);


const Image: FC<{ src: string }> = ({src}) => (
    <motion.div
        className={css.image}
        style={{backgroundImage: `url(${src})`}}
    />
);
