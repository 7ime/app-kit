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
                    <Avatar />
                    <Avatar name={'John Doe'} />
                    <Avatar name={'John Doe'} />
                    <Avatar name={'John Doe'} />
                    <Avatar name={'John Doe'} />
                    <Avatar name={'John Doe'} />
                    <Avatar name={'John Doe'} />
                    <Avatar imageUrl={'https://besthqwallpapers.com/Uploads/11-11-2017/28172/thumb-manarola-4k-sea-coast-bay.jpg'} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AvatarScene
