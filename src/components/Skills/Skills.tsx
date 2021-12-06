import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../../common/styles/container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>My Skills</h2>*/}
                <Title value={'My Skills'}/>
                <div className={s.skills}>
                    <Skill
                        title={'HTML'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                    <Skill
                        title={'CSS'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                    <Skill
                        title={'JS'}
                        description={'sdj vp98j rtglk sdflk vbsp[ritj h;lkrhp;09 erltkh rh'}
                    />
                </div>
            </div>
        </div>
    )
}
