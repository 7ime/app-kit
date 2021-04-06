import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../index.module.scss'
import Avatar from '@components/ui/avatar/components/avatar'

const examplesNames: string[] = [
    'John Doe',
    'Davina',
    'Sara',
    'Bill',
    'Ирина',
    'Вероника',
    'Александр',
    'Рита',
    'Мария',
    'Давид',
    '光辉',
    'ורד',
    'عادل',
    'Георгий',
    'Константин',
]

const AvatarsKit = () => {
    return (
        <div className={css.avatarsKit}>
            <div className={cssCommon.title}>Avatars Kit:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <span className={cssCommon.subTitle}>Default:</span>
                    <Avatar parentClass={css.avatar} />
                </div>

                <div className={css.item}>
                    <span className={cssCommon.subTitle}>Image:</span>
                    <Avatar parentClass={css.avatar} imageUrl={'https://www.anypics.ru/mini/201211/41993.jpg'} />
                </div>
            </div>

            <div className={css.list}>
                {
                    examplesNames.map((name) => (
                        <div className={css.item} key={name}>
                            <span className={cssCommon.subTitle}>{name}:</span>
                            <Avatar parentClass={css.avatar} name={name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AvatarsKit
