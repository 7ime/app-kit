import * as React from 'react'
import ReactCalendar from 'react-calendar'
import classnames from 'classnames'
import ICalendar from '../../model'
import css from '../../styles/calendar.module.scss'
import '../../styles/calendar-library.scss'

const Calendar = (props: ICalendar.Props) => {
    const {
        parentClass,
        ...restProps
    } = props

    const classNames = classnames(
        css.calendar,
        parentClass,
    )

    return (
        <div className={classNames}>
            <ReactCalendar {...restProps} />
        </div>
    )
}

export default React.memo(Calendar)
