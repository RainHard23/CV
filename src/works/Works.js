import React from 'react';
import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";
const Works = () => {
    return (
        <div className={style.worksBlock}>
              <div className={`${styleContainer.container} ${style.worksContainer}`}>
                  <h2>My works</h2>
                  <div className={style.works}>
                    <Work title={'Pudge'}  description={'qweqweewq qweqweqwe qweqweqwe'}/>
                      <Work title={'Pudge'}  description={'qweqweewq qweqweqwe qweqweqweqweqweewq qweqweqwe qweqweqwe'}/>
                  </div>
              </div>
        </div>
    );
};

export default Works;