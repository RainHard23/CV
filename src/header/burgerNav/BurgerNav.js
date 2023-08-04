import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";

const BurgerNav = () => {
    let [menuIsOpen, setBurgerMenu] = useState(false)
    const onClickBurger = () => {
        setBurgerMenu(
            !menuIsOpen
        )
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70} // Установите соответствующее значение смещения (offset) для корректной активации раздела
                    duration={500}
                >
                    Home
                </Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Skills
                </Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contacts
                </Link>
            </div>
            <div onClick={onClickBurger} className={style.burgerBtn}></div>
        </div>
    );
};

export default BurgerNav;