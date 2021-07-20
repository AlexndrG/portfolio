import React from 'react';
import s from './Footer.module.css'
import sContainer from '../../common/styles/container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.title}>
                    <h2>Ivan Ivanov</h2>
                </div>

                <div className={s.media}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>

                <div className={s.title}>
                    <h3>(c) 2021 All rights reserved</h3>
                </div>
            </div>
        </div>
    )
}
