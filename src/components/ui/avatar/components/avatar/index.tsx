import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/avatar.module.scss'
import IAvatar from '@components/ui/avatar/model'
import {getAvatarInitials} from '@helpers/avatar/get-avatar-initilas'
import {getAvatarColor} from '@helpers/avatar/get-avatar-color'
import {AVATAR_COLORS, DEFAULT_AVATAR_INITIAL} from '@constants/avatar'

const Avatar = (props: IAvatar.Props) => {
    const {
        imageUrl,
        name,
        parentClass
    } = props

    const classNames = classnames(
        css.avatar,
        parentClass
    )

    if (imageUrl) {
        return (
            <div className={classNames} style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        )
    }

    const [firstInitial, secondInitial] = getAvatarInitials(name || '', [DEFAULT_AVATAR_INITIAL])
    const bgColor = getAvatarColor(firstInitial, Array.from(AVATAR_COLORS.values()))

    return (
        <div className={classNames} style={{
            backgroundColor: bgColor,
        }}>
            <div className={css.initials}>
                <span>{firstInitial}</span>
                {
                    secondInitial && <span>{secondInitial}</span>
                }
            </div>
        </div>
    )
}

export default React.memo(Avatar)
