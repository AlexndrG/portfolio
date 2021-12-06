import React from 'react';
import s from './Remote.module.scss'
import sContainer from '../../common/styles/container.module.css'
import {Title} from '../../common/components/title/Title';

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                    <Title value={'I Am Available For Freelance'}/>
                    <button className={s.button}>HIRE ME</button>
            </div>
        </div>
    )
}
