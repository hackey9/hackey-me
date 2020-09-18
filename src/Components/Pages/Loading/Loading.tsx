import AvatarWithLoading from "Components/Elements/Avatar/AvatarWithLoading";
import MeetLayout from "Components/Pages/Meet/MeetLayout";
import React, {FC} from "react";


const Loading: FC = () => {

    // todo Resources loading system

    return (
        <MeetLayout>
            <AvatarWithLoading/>
        </MeetLayout>
    );
}
export default Loading;