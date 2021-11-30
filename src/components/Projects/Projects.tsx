import React from 'react';
import s from './Projects.module.css'
import sContainer from '../../common/styles/container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title value={'My projects'}/>

                <div className={s.projects}>
                    <Project
                        title={'Social Network'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                    <Project
                        title={'TodoList'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                </div>
            </div>
        </div>
    )
}
