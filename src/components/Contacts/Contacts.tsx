import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../../common/styles/container.module.css'
import {Title} from '../../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                {/*<div className={s.title}>*/}
                {/*    <h2>Contact me</h2>*/}
                {/*</div>*/}
                <Title value={'Contact me'}/>
                <form className={s.form}>
                    <input className={s.input} type={'text'} placeholder={'Name'}/>
                    <input className={s.input} type={'text'} placeholder={'E-mail'}/>
                    <textarea className={s.textarea} placeholder={'Message'}/>
                    <button className={s.button}>Send</button>
                </form>
            </div>
        </div>
    )
}
