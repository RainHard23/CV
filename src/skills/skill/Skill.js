import React from 'react';
import style from './Skill.module.css'
const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;