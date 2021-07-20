import React from 'react';
import s from './Header.module.css'
import sContainer from '../../common/styles/container.module.css'
import {Nav} from './Nav/Nav';

export const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={`${sContainer.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    )
}