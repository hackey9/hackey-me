import {useLoadedContent} from "Components/Special/LoadingController";
import {TSkills} from "Types/Skills";


export default function useSkills(): TSkills {
    return useLoadedContent("skills") as TSkills;

    // todo save to ref or state

    // todo
    //  load images
    //  replace recursively with blob's URL's
    //  don't forget URL.revoke

}
