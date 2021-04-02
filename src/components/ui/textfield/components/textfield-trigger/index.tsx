import * as React from 'react'
import css from '../../styles/textfield-trigger.module.scss'
import classnames from 'classnames'
import {ITextField} from '@components/ui/textfield/model'

const TextFieldTrigger = (props: ITextField.TriggerProps) => {
    const {
        type,
        onClick
    } = props

    const classNames = classnames(
        css.trigger,
        css[type]
    )

    const handleMouseDown = React.useCallback((event: React.MouseEvent) => {
        event.preventDefault()
    }, [])

    return (
        <div className={classNames} onClick={onClick} onMouseDown={handleMouseDown} />
    )
}

export default React.memo(TextFieldTrigger)
