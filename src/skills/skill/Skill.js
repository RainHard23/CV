import React from 'react';
import style from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div style={props.icon} className={style.fontImg}></div>
            </div>
            <div className={style.skillTextContainer}>
                <h3>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
};

export default Skill;