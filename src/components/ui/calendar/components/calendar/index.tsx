import * as React from 'react'
import ReactCalendar from 'react-calendar'
import classnames from 'classnames'
import ICalendar from '../../model'
import css from '../../styles/calendar.module.scss'
import '../../styles/calendar-library.scss'
import CalendarMonthNavLabel from '@components/ui/calendar/components/calendar-month-nav-label'

const Calendar = (props: ICalendar.Props) => {
    const {
        parentClass,
        prevLabel = <CalendarMonthNavLabel type={'prev'} />,
        nextLabel = <CalendarMonthNavLabel type={'next'} />,
        prev2Label = null,
        next2Label = null,
        ...restProps
    } = props

    const classNames = classnames(
        css.calendar,
        parentClass,
    )

    return (
        <div className={classNames}>
            <ReactCalendar
                {...restProps}
                prev2Label={prev2Label}
                next2Label={next2Label}
                prevLabel={prevLabel}
                nextLabel={nextLabel}
            />
        </div>
    )
}

export default React.memo(Calendar)
