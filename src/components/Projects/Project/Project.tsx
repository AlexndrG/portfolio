import React from 'react';
import s from './Project.module.css'

type PropjectPropsType = {
    title: string
    description: string
}

export const Project = (props: PropjectPropsType) => {
    return (
        <div className={s.propject}>
            <a href={''}>
                <div className={s.picture}></div>
            </a>
            <div className={s.propjectContainer}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    )
}
