import AvatarWithLoading from "Components/Elements/Avatar/AvatarWithLoading";
import AvatarImage from "Components/Pages/Meet/AvatarImage";
import MeetLayout from "Components/Pages/Meet/MeetLayout";
import React, {FC} from "react";


const Meet: FC = () => {

    return (
        <MeetLayout>
            <AvatarWithLoading>
                <AvatarImage/>
            </AvatarWithLoading>
        </MeetLayout>
    );
}
export default Meet;