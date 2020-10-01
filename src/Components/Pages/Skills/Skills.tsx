import {motion} from "framer-motion";
import React, {FC, PropsWithChildren} from "react";
import css from "./Skills.module.scss";


type P = PropsWithChildren<{}>;

const Skills: FC<P> = ({children}: P) => {

    return (
        <Layout>
            {children}
        </Layout>
    );
}
export default Skills;


const Layout: FC = ({children}) => (
    <motion.div className={css.layout}>
        {children}
    </motion.div>
)
