import React from 'react';
import s from './Projects.module.css'
import sContainer from '../../common/styles/container.module.css'
import {Project} from './Project/Project';

export const Projects = () => {
    return (
        <div className={s.propjectsBlock}>
            <div className={`${sContainer.container} ${s.propjectsContainer}`}>
                <h2 className={s.title}>My Propjects</h2>
                <div className={s.propjects}>
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
