import React from 'react';
import s from './Title.module.scss'

type PropsType = {
    value: string
}

export const Title = (props: PropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.value}</h2>
        </div>
    )
}
