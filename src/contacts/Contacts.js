import React from 'react';
import {useForm} from 'react-hook-form'; // Импортируйте хук useForm
import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Contacts = () => {
    const {
        register,
        handleSubmit,
    } = useForm(); // Инициализация хука

    const onSubmit = (data) => {
        console.log(data.firstName)
        axios.post("https://server-amber-five.vercel.app/sendMessage", {
            firstName: data.firstName,
            email: data.email,
            message: data.message
        })
            .then(()=> {
                alert('pudge')
            })
    };

    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={"Contacts"}/>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.formBlock}>
                        <input
                            {...register ("firstName", {
                            })}
                        />
                        <input
                            {...register ("email", {
                            })}
                        />
                        <textarea
                            rows={'7'}
                            {...register ("message", {

                            })}
                        ></textarea>
                        <button type='submit'>Send message</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;
