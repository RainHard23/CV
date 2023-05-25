import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={"JS"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill title={"React"} description={'Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.'}/>
                <Skill title={"Redux"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill title={"Redux"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;