import App from "Components/Pages/App";
import {AnimateSharedLayout} from "framer-motion";
import React, {FC} from "react";
import "./Fonts.scss";
import "./Root.scss";


const Root: FC = () => (
    <AnimateSharedLayout>
        <App/>
    </AnimateSharedLayout>
)
export default Root;
