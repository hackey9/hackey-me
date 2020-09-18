import AvatarCircle from "Components/Elements/Avatar/AvatarCircle";
import React, {FC, PropsWithChildren, useMemo} from "react";


type P = PropsWithChildren<{}>;

const AvatarWithLoading: FC<P> = ({children}: P) => {

    const isLoading = useMemo(() => !children, [children]);

    return (
        <AvatarCircle loading={isLoading} image={children}/>
    );
}
export default AvatarWithLoading;



