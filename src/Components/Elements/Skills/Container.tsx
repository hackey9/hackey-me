import css from "Components/Pages/Skills/Skills.module.scss";
import {motion} from "framer-motion";
import React, {FC, Ref, useEffect, useState} from "react";
import useResizeObserver from "use-resize-observer";
//import css from "./Container.module.scss";


const Container: FC = ({children}) => {

    useEffect(() => {

    }, []);

    return (
        <Layout>
            <Area>
                {children}
            </Area>
        </Layout>
    );
}
export default Container;


const Layout: FC = ({children}) => (
    <motion.div className={css.layout}>
        {children}
    </motion.div>
);


const Area: FC = ({children}) => {

    const itemSize = 90;

    const ref = useResizeObserver({
        onResize: ({width}) => {
            width && setRows(Math.round(width / itemSize));
        }
    }).ref;

    //React.Children.toArray(children);

    const [rows, setRows] = useState<number | null>(null);

    return (
        <motion.div className={css.area} ref={ref as Ref<HTMLDivElement>}>
            {children}
        </motion.div>
    );
};
