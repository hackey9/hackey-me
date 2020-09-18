import Loading from "Components/Pages/Loading/Loading";
import Meet from "Components/Pages/Meet/Meet";
import React, {FC, useCallback, useEffect, useState} from "react";


const App: FC = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const setLoaded = useCallback(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {

        setTimeout(() => {
            setLoaded();
        }, 3500);

    }, [setLoaded]);

    return (
        <>
            {!isLoaded && <Loading/>}

            {isLoaded && <>
                <Meet/>
            </>}

        </>
    );
}
export default App;