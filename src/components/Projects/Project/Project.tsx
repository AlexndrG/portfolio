import React from 'react';
import s from './Project.module.scss'

type PropjectPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

export const Project = (props: PropjectPropsType) => {
    return (
        <div className={s.project}>
            <a href={''}>
                <div
                    className={s.picture}
                    style={props.style}
                >
                </div>
            </a>
            <div className={s.projectContainer}>
                <div className={s.projectInfo}>
                    <h3 className={s.projectTitle}>{props.title}</h3>
                    <div className={s.description}>{props.description}</div>
                </div>
            </div>
        </div>
    )
}
