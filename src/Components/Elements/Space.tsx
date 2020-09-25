import React, {FC} from "react";


const Space: FC<{ height?: number }> = ({children, height}) => {

    return (
        <div style={{marginTop: height}}>
            {children}
        </div>
    );
}
export default Space;
