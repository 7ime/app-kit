import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/calendar.module.scss'

interface IProps {
    type: 'prev' | 'next'
}

const CalendarMonthNavLabel = (props: IProps) => {
    const {
        type
    } = props

    const classNames = classnames(
        css.monthNavLabel,
        css[type]
    )

    return (
        <span className={classNames} />
    )
}

export default React.memo(CalendarMonthNavLabel)
