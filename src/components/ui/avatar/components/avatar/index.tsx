import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/avatar.module.scss'
import IAvatar from '@components/ui/avatar/model'
import {extractAvatarInitials} from '@helpers/avatar/extract-avatar-initilas'
import {getAvatarBgColor} from '@helpers/avatar/get-avatar-bg-color'

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

    const [firstInitial, secondInitial] = extractAvatarInitials(name || '')
    const bgColor = getAvatarBgColor(firstInitial)

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
