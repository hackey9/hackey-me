import Container from "Components/Elements/Skills/Container";
import Skill from "Components/Elements/Skills/Skill";
import useSkills from "Hooks/useSkills";
import React, {FC} from "react";
//import css from "./Skills.module.scss";


const Skills: FC = () => {

    const skills = useSkills();

    return (
        <Container>
            {skills.map(({id: name, border, background, image}) => (
                <Skill key={name} name={name} border={border} bg={background} image={image}/>
            ))}
        </Container>
    );
}
export default Skills;


