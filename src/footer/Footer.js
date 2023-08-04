import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Footer.module.scss'
import Fade from "react-reveal/Fade";
import telegram from "../assets/img/footer/telegram.svg";
import linkedin from "../assets/img/footer/linkedin.svg";
import github from "../assets/img/footer/github.svg";
import cv from "../assets/img/footer/cv.svg";

const Footer = () => {
    const telegramImg = {
        backgroundImage: `url(${telegram})`
    }
    const linkedInImg = {
        backgroundImage: `url(${linkedin})`
    }
    const gitHubImg = {
        backgroundImage: `url(${github})`
    }
    const cvImg = {
        backgroundImage: `url(${cv})`
    }
    return (
        <div className={s.footerBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Stanislav Semenenco</h2>
                <div className={s.iconBlock}>
                    <a href='https://t.me/Leviiafun' target="_blank" style={telegramImg} className={s.footerIcon}></a>
                    <a href='https://www.linkedin.com/in/stanislav-semenenco-7342b5270/' style={linkedInImg}  target="_blank" className={s.footerIcon}></a>
                    <a href='https://github.com/RainHard23' style={gitHubImg}  target="_blank" className={s.footerIcon}></a>
                    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7086722285318856704/аш' style={cvImg}  target="_blank" className={s.footerIcon}></a>
                </div>
                <p>© 2023 All Rights Reserved.</p>
            </div>
            </Fade>
        </div>
    );
};

export default Footer;