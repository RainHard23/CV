import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form action="" className={style.formBlock}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'E-mail'} type="text"/>
                    <textarea placeholder={'Your message'} name="" rows="7" ></textarea>
                    <button type='submit'>Send message</button>
                </form>
            </div>
            </Fade>
        </div>
    );
};

export default Contacts;