import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../index.module.scss'
import Avatar from '@components/ui/avatar/components/avatar'

const AvatarsKit = () => {
    return (
        <div className={css.avatarsKit}>
            <div className={cssCommon.title}>Avatars Kit:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Default:</div>
                    <Avatar parentClass={css.avatar} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Image:</div>
                    <Avatar parentClass={css.avatar} imageUrl={'https://www.anypics.ru/mini/201211/41993.jpg'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>John Doe:</div>
                    <Avatar parentClass={css.avatar} name={'John Doe'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Davina:</div>
                    <Avatar parentClass={css.avatar} name={'Davina'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Sara:</div>
                    <Avatar parentClass={css.avatar} name={'Sara'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Bill:</div>
                    <Avatar parentClass={css.avatar} name={'Bill'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Катрина:</div>
                    <Avatar parentClass={css.avatar} name={'Катрина'} />
                </div>


                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Вероника:</div>
                    <Avatar parentClass={css.avatar} name={'Вероника'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Александр:</div>
                    <Avatar parentClass={css.avatar} name={'Александр'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Петр:</div>
                    <Avatar parentClass={css.avatar} name={'Петр'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Илья:</div>
                    <Avatar parentClass={css.avatar} name={'Илья'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>Рита:</div>
                    <Avatar parentClass={css.avatar} name={'Рита'} />
                </div>

                <div className={css.item}>
                    <div className={cssCommon.subTitle}>光辉:</div>
                    <Avatar parentClass={css.avatar} name={'光辉'} />
                </div>
            </div>
        </div>
    )
}

export default AvatarsKit
