import Layout from "Components/Elements/Layout";
import Meet from "Components/Pages/Meet/Meet";
import Skills from "Components/Pages/Skills/Skills";
import React, {FC, useEffect, useState} from "react";


const App: FC = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => setLoading(false), 2100);

    }, []);

    return (
        <Layout hideBars={!loading}>
            <Meet loading={loading}/>
            {!loading && <>
                <Skills/>
            </>}
        </Layout>
    );
}
export default App;
