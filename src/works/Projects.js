import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import socialImage from './../assets/img/social-network.jpg'
import todolistImage from './../assets/img/todolist.jpg'
import Project from "./project/Project";
import Fade from "react-reveal/Fade";

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    return (
        <div id='projects' className={style.worksBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.works}>
                    <Project style={social} title={'Social Network'} description={'Social Network is an online platform that allows people to create an account, interact with other people on the website.'}/>
                    <Project style={todolist} title={'Task Manager'} description={'Task Manager is an online platform for organizing your personal or Project tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'}/>
                </div>
                {/*<Button text={'VIEV MORE'}/>*/}
            </div>
            </Fade>
        </div>
    );
};

export default Projects;