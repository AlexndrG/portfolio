import React from 'react';
import s from './Projects.module.scss'
import sContainer from '../../common/styles/container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';

import socialImage from '../../assets/image/social.png'
import todoImage from '../../assets/image/todo.png'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todo = {
        backgroundImage: `url(${todoImage})`,
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>

                <div className={s.projects}>
                    <Project
                        style={social}
                        title={'Social Network'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                    <Project
                        style={todo}
                        title={'TodoList'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                </div>
            </div>
        </div>
    )
}
