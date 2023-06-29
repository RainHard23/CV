import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import socialImage from './../assets/img/kek.jpg'
import todolistImage from './../assets/img/pudge.jpg'
import Project from "./project/Project";

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    return (
        <div className={style.worksBlock}>
              <div className={`${styleContainer.container} ${style.worksContainer}`}>
                  <Title title={'Projects'}/>
                  <div className={style.works}>
                    <Project style={social} title={'Pudge'} description={'qweqweewq qweqweqwe qweqweqwe'}/>
                      <Project style={todolist} title={'Pudge'} description={'qweqweewq qweqweqwe qweqweqweqweqweewq qweqweqwe qweqweqwe'}/>
                  </div>
              </div>
        </div>
    );
};

export default Projects;