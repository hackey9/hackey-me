import {useLoadedContent} from "Components/Special/LoadingController";


export default function useAvatar() : string {
    return useLoadedContent("avatar") as string;
}
