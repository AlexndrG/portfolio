import React from 'react';
import s from './Footer.module.scss'
import sContainer from '../../common/styles/container.module.css'
import {Title} from '../../common/components/title/Title';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                {/*<div className={s.title}>*/}
                {/*    <h2>Alexandr G</h2>*/}
                {/*</div>*/}
                <Title value={'Alexandr G'}/>


                <div className={s.media}>
                    <div className={s.icon}>
                        <div className={s.iconText}>
                            Telegram
                        </div>
                    </div>
                    <div className={s.icon}>
                        <div className={s.iconText}>
                            WhatsApp
                        </div>
                    </div>
                    <div className={s.icon}>
                        <div className={s.iconText}>
                            VK
                        </div>
                    </div>
                </div>

                <div className={s.title}>
                    <h3>(c) 2021 All rights reserved</h3>
                </div>
            </div>
        </div>
    )
}
