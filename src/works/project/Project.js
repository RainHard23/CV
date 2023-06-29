import React from 'react';
import style from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgBlock} style={props.style}>
                <a className={style.workButton} href="#">Посмотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;