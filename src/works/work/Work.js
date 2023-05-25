import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgBlock}>
                {/*<img src="https://yt3.ggpht.com/7ZMbRacR7yeqZG3lCXN8CSSaEi5IJdRbGgUNDaaK4tWsRloUBhh6Nr7_uQvU5qeodISc1_qxhw=s900-c-k-c0x00ffffff-no-rj" alt="#"/>*/}
                <a className={style.workButton} href="#">Посмотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Work;