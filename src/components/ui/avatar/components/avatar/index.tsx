import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/avatar.module.scss'
import IAvatar from '@components/ui/avatar/model'
import {extractAvatarInitials} from '@components/ui/avatar/helpers/extract-avatar-initilas'
import {DEFAULT_AVATAR_COLOR} from '@components/ui/avatar/constants'

const Avatar = (props: IAvatar.Props) => {
    const {
        bgImageUrl,
        bgColor = DEFAULT_AVATAR_COLOR,
        name,
        parentClass
    } = props

    let initials = null

    if (name) {
        initials = extractAvatarInitials(name)
    }

    if (!bgImageUrl && !name) {
        initials = extractAvatarInitials('')
    }

    const classNames = classnames(
        css.avatar,
        parentClass
    )

    return (
        <div className={classNames} style={{
            backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
            backgroundColor: bgColor,
        }}>
            {
                initials && (
                    <div className={css.initials}>
                        <span>{initials[0]}</span>
                        {
                            initials[1] && <span>{initials[1]}</span>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default React.memo(Avatar)
