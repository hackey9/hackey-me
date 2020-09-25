import {motion} from "framer-motion";
import React, {FC, PropsWithChildren} from "react";


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
    <motion.div>
        {children}
    </motion.div>
)
