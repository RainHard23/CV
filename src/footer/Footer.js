import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Stanislav Semenenco</h2>
                <div className={s.iconBlock}>
                    <div className={s.footerIcon}></div>
                    <div className={s.footerIcon}></div>
                    <div className={s.footerIcon}></div>
                    <div className={s.footerIcon}></div>
                </div>
                <p>© 2023 kekes, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;