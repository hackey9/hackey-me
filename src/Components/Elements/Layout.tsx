import {motion} from "framer-motion";
import React, {FC} from "react";


const Layout: FC<{ hideBars?: boolean }> = ({children}) => {

    return (
        <motion.div layout>
            {children}
        </motion.div>
    );
}
export default Layout;
