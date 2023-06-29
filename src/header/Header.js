import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import style from './Header.module.scss'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={`${style.header} ${styleContainer.container}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;