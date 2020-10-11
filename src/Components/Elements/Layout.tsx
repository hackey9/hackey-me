import React, {FC, PropsWithChildren} from "react";
import {motion} from "framer-motion";


type P = PropsWithChildren<{
    hideBars?: boolean;
}>;

const Layout: FC<P> = ({children}: P) => {

    return (
        <motion.div layout>
            {children}
        </motion.div>
    );
}
export default Layout;