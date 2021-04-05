import * as React from 'react'
import {Helmet} from 'react-helmet'
import css from './index.module.scss'
import Avatar from '@components/ui/avatar/components/avatar'

const AvatarScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Avatar</title>
            </Helmet>

            <div className={css.avatarScene}>
                <div className={css.list}>
                    <div className={css.item}>
                        <Avatar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AvatarScene
