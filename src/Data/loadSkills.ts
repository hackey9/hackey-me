import {TSkills} from "Types/Skills";


export default async function loadSkills(): Promise<TSkills> {
    const response = await fetch("/static/data/skills.json");
    return await response.json() as TSkills;
};
