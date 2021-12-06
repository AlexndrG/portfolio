import React from 'react';
import s from './Main.module.scss'
import sContainer from '../../common/styles/container.module.css'
import photo from '../../assets/image/photo.png'

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

                <div>
                    <img className={s.photo} src={photo} alt={'Photo'}/>
                </div>
            </div>
        </div>
    )
}
