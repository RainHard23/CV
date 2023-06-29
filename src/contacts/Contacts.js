import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <Title title={"Contact"}/>
                <form action="" className={style.formBlock}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'E-mail'} type="text"/>
                    <textarea placeholder={'Your message'} name="" rows="7" ></textarea>
                </form>
                <button className={style.button}>send message</button>
            </div>
        </div>
    );
};

export default Contacts;