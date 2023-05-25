import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import style from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={`${style.header} ${styleContainer.container}`}>
        <Nav />
        </div>
    );
};

export default Header;