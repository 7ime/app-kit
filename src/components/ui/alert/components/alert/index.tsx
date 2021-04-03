import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/alert.module.scss'
import IAlert from '@components/ui/alert/model'

const Alert = (props: IAlert.Props) => {
    const {
        type = 'info',
        onClose,
        children,
        parentClass
    } = props

    const classNames = classnames(
        css.alert,
        css[type],
        parentClass
    )

    return (
        <div className={classNames}>
            {children}

            <div className={css.close} onClick={onClose} />
        </div>
    )
}

export default React.memo(Alert)
