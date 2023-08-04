import React from 'react';
import style from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

import reduxImg from '../assets/img/skills/redux.svg'
import reactImg from '../assets/img/skills/react.svg'
import typescriptImg from '../assets/img/skills/typescript.svg'
import reduxtoolkit from '../assets/img/skills/reduxtoolkit.svg'
import restApiImg from '../assets/img/skills/restapi.svg'
import mUIImg from '../assets/img/skills/material.svg'
import gitImg from '../assets/img/skills/git.svg'
import scssImg from '../assets/img/skills/scss.svg'
import uTestImg from '../assets/img/skills/utest.svg'
import Fade from "react-reveal/Fade";


const Skills = () => {

    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const reduxtoolkitImg = {
        backgroundImage: `url(${reduxtoolkit})`
    }
    const typescriptIcon = {
        backgroundImage: `url(${typescriptImg})`
    }
    const restApiIcon = {
        backgroundImage: `url(${restApiImg})`
    }
    const mUIIcon = {
        backgroundImage: `url(${mUIImg})`
    }



    const gitIcon = {
        backgroundImage: `url(${gitImg})`
    }
    const scssIcon = {
        backgroundImage: `url(${scssImg})`
    }
    const uTestIcon = {
        backgroundImage: `url(${uTestImg})`
    }


    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                <Skill icon={react} title={"React"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={redux} title={"Redux"} description={'Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={reduxtoolkitImg} title={"Redux Toolkit"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={typescriptIcon} title={"Typescript"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={restApiIcon} title={"REST API"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={mUIIcon} title={"MUI"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={gitIcon} title={"GIT"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={scssIcon} title={"SCSS"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Skill icon={uTestIcon} title={"Unit Test"} description={'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
            </Fade>

        </div>
    );
};

export default Skills;