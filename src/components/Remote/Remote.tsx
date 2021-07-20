import React from 'react';
import s from './Remote.module.css'
import sContainer from '../../common/styles/container.module.css'

export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <div className={s.title}>
                    <h2>I Am Available For Freelance</h2>
                </div>
                <button>HIRE ME</button>
            </div>
        </div>
    )
}
