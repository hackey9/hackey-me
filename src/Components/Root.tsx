import App from "Components/Core/App";
import FontsStyle from "Components/Styles/FontsStyle";
import GlobalStyle from "Components/Styles/GlobalStyle";
import {AnimateSharedLayout} from "framer-motion";
import React, {FC} from "react";


const Root: FC = () => {

    return (<>
        <GlobalStyle/>
        <FontsStyle/>
        <AnimateSharedLayout>
            <App/>
        </AnimateSharedLayout>
    </>);
}
export default Root;