import Layout from "Components/Elements/Layout";
import Meet from "Components/Pages/Meet/Meet";
import LoadingController from "Components/Special/LoadingController";
import React, {FC, useReducer} from "react";


const App: FC = () => {

    const [loaded, setLoaded] = useReducer((_: boolean) => true, false);

    return (
        <LoadingController onLoaded={setLoaded}>
            <Layout hideBars={loaded}>
                <Meet loading={!loaded}/>
                {loaded && <>
                    {/*<Skills/>*/}
                </>}
            </Layout>
        </LoadingController>
    );
}
export default App;
