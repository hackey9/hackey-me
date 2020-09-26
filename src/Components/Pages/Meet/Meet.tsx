import Avatar from "Components/Elements/Meet/Avatar";
import Name from "Components/Elements/Meet/Name";
import Nickname from "Components/Elements/Meet/Nickname";
import Pro from "Components/Elements/Meet/Pro";
import Space from "Components/Elements/Space";
import {motion} from "framer-motion";
import React, {FC} from "react";
import css from "./Meet.module.scss";


const Meet: FC<{ loading?: boolean }> = ({loading}) => {

    return (
        <Layout>
            <Avatar loading={loading}/>
            {!loading && <>
                <Space height={30}/>
                <Name delay={1.2}/>

                <Space height={14}/>
                <Nickname delay={2}/>

                <Space height={64}/>
                <Pro delay={2.8}/>
            </>}
        </Layout>
    );
}
export default Meet;


const Layout: FC = () => <motion.div layout className={css.layout}/>
