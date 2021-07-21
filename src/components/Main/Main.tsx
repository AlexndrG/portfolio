import React from 'react';
import s from './Main.module.css'
import sContainer from '../../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I am ... <br/>
                        Alexandr G
                    </h1>
                    <p>React/Redux developer</p>
                </div>

                <div className={s.photo}></div>
            </div>
        </div>
    )
}
